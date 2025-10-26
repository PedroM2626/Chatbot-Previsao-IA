
import { GoogleGenAI, GenerateContentResponse, Part, Type } from '@google/genai';
import { FileData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("A variável de ambiente API_KEY não está definida.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY, vertexai: true });

const model = 'gemini-2.5-flash';

interface PredictionResponse {
    analysis: string;
    fileContent?: string | null;
}

export const runPrediction = async (prompt: string, fileData: FileData | null): Promise<PredictionResponse> => {
  const systemInstruction = `Você é um chatbot de análise preditiva. Sua tarefa é analisar os dados fornecidos (texto, CSV, JSON ou imagem) e responder à pergunta do usuário com base neles. Forneça previsões, análises e insights claros e concisos. Se a pergunta do usuário implicar a geração de um resultado que possa ser um arquivo (como um CSV com uma nova coluna de previsões), você deve fornecer o conteúdo completo desse novo arquivo para download no campo 'fileContent'. Sua análise textual deve estar no campo 'analysis'.`;

  const parts: Part[] = [];

  if (fileData) {
    if (fileData.isImage) {
      parts.push({
        inlineData: {
          mimeType: fileData.type,
          data: fileData.content,
        },
      });
      parts.push({ text: `Analise esta imagem e responda: ${prompt}` });
    } else {
      const fileContext = `Com base no seguinte conteúdo do arquivo "${fileData.name}":\n\n---\n${fileData.content}\n---\n\nResponda à seguinte pergunta: ${prompt}`;
      parts.push({ text: fileContext });
    }
  } else {
    parts.push({ text: prompt });
  }

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      analysis: {
        type: Type.STRING,
        description: 'Sua análise textual e resposta à pergunta do usuário.',
      },
      fileContent: {
        type: Type.STRING,
        description: 'Opcional. O conteúdo completo de um arquivo gerado (por exemplo, CSV, JSON) se a solicitação implicar na criação de um. Deixe em branco ou nulo se não for aplicável.',
      },
    },
    required: ['analysis'],
  };

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: {
        role: 'user',
        parts: parts,
      },
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        topP: 0.95,
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
      },
    });
    
    const responseText = response.text;
    const parsedResponse: PredictionResponse = JSON.parse(responseText);
    return parsedResponse;

  } catch (error) {
    console.error('Erro ao chamar ou processar a resposta da API Gemini:', error);
    if (error instanceof SyntaxError) {
        return { analysis: "Desculpe, recebi uma resposta em um formato inesperado e não consegui processá-la. Tente reformular sua pergunta.", fileContent: null };
    }
    throw new Error('Falha ao obter resposta do modelo de IA.');
  }
};
