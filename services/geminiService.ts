
import { GoogleGenAI, GenerateContentResponse, Part, Type, Content } from '@google/genai';
import { FileData, ChatMessage } from '../types';

if (!process.env.API_KEY) {
    throw new Error("A variável de ambiente API_KEY não está definida.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY, vertexai: true });

const model = 'gemini-2.5-flash';

interface PredictionResponse {
    analysis: string;
    fileContent?: string | null;
    downloadFileName?: string | null;
}

export const runPrediction = async (history: ChatMessage[], currentFile: FileData | null): Promise<PredictionResponse> => {
  const systemInstruction = `Você é um assistente de ciência de dados especialista. Sua função é guiar os usuários através de um ciclo de machine learning. Você pode executar as seguintes tarefas com base nos dados fornecidos (texto, CSV, JSON): 
1. Análise Exploratória de Dados (EDA): Forneça estatísticas descritivas, insights, e identifique problemas de qualidade de dados.
2. Tratamento e Normalização de Dados: Execute tarefas como limpeza de dados (valores ausentes), normalização, etc., conforme solicitado. Se você modificar os dados, forneça o conjunto de dados transformado no campo 'fileContent'.
3. Previsão: Crie modelos preditivos e faça previsões. Adicione as previsões como uma nova coluna ao conjunto de dados e forneça o resultado em 'fileContent'.
Responda sempre em formato JSON. Sua explicação textual deve estar no campo 'analysis'. Se gerar um arquivo, seu conteúdo deve estar em 'fileContent' e seu nome em 'downloadFileName' (ex: 'dados_limpos.csv').`;

  const lastMessage = history[history.length - 1];
  const conversationHistory: Content[] = history
    .slice(0, -1)
    .filter(m => m.id !== 'initial')
    .map(msg => ({
      role: msg.role === 'ai' ? 'model' : 'user',
      parts: [{ text: msg.fileContent ? `Na mensagem anterior, eu gerei um arquivo chamado ${msg.downloadFileName}. Agora, a análise é: ${msg.text}` : msg.text }]
    }));

  const currentUserParts: Part[] = [];
  let userPrompt = lastMessage.text;

  if (currentFile) {
    if (currentFile.isImage) {
      currentUserParts.push({ inlineData: { mimeType: currentFile.type, data: currentFile.content } });
      userPrompt = `Analise esta imagem e responda: ${userPrompt}`;
    } else {
      userPrompt = `Com base no seguinte conteúdo do arquivo "${currentFile.name}":\n\n---\n${currentFile.content}\n---\n\nResponda à seguinte pergunta: ${userPrompt}`;
    }
  }
  currentUserParts.push({ text: userPrompt });

  const contents: Content[] = [...conversationHistory, { role: 'user', parts: currentUserParts }];

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      analysis: {
        type: Type.STRING,
        description: 'Sua análise textual e resposta à pergunta do usuário.',
      },
      fileContent: {
        type: Type.STRING,
        description: 'Opcional. O conteúdo completo de um arquivo gerado (CSV, JSON, etc.).',
      },
      downloadFileName: {
        type: Type.STRING,
        description: "Opcional. O nome do arquivo para download (ex: 'dados_processados.csv'). Use a extensão apropriada.",
      }
    },
    required: ['analysis'],
  };

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
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
