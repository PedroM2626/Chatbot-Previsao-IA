
import React, { useState, useCallback } from 'react';
import { ChatMessage, FileData } from './types';
import { runPrediction } from './services/geminiService';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';
import { BotIcon } from './components/icons/BotIcon';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial',
      role: 'ai',
      text: 'Olá! Sou seu assistente de previsões. Envie-me um arquivo (CSV, JSON, TXT) ou uma imagem, faça uma pergunta e eu farei uma análise para você. Se aplicável, gerarei um arquivo com os resultados para download.',
    },
  ]);
  const [uploadedFile, setUploadedFile] = useState<FileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const fileToText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      if (file.type.startsWith('image/')) {
        const base64Data = await fileToBase64(file);
        setUploadedFile({
          name: file.name,
          type: file.type,
          content: base64Data,
          isImage: true,
        });
      } else {
        const textContent = await fileToText(file);
        setUploadedFile({
          name: file.name,
          type: file.type,
          content: textContent,
          isImage: false,
        });
      }
    } catch (error) {
        console.error("Erro ao processar o arquivo:", error);
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: 'Desculpe, houve um erro ao ler o seu arquivo.' }]);
    }
  }, []);

  const handleSubmit = useCallback(async (prompt: string) => {
    if (!prompt.trim() && !uploadedFile) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: prompt,
      fileName: uploadedFile?.name,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await runPrediction(prompt, uploadedFile);
      
      const fileExtension = uploadedFile?.name.split('.').pop() || 'txt';

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: aiResponse.analysis,
        fileContent: aiResponse.fileContent || undefined,
        downloadFileName: aiResponse.fileContent ? `previsao_${Date.now()}.${fileExtension}` : undefined,
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Erro da API Gemini:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: 'Desculpe, não consegui processar sua solicitação. Verifique sua chave de API e tente novamente.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setUploadedFile(null);
    }
  }, [uploadedFile]);

  return (
    <div className="flex flex-col h-screen bg-slate-900 font-sans">
      <header className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 shadow-lg">
        <BotIcon className="w-8 h-8 text-cyan-400 mr-3" />
        <h1 className="text-xl font-bold text-slate-200">Chatbot de Previsão com IA</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <ChatWindow messages={messages} isLoading={isLoading} />
      </main>
      <footer className="p-4 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700">
        <InputArea
          onSubmit={handleSubmit}
          onFileChange={handleFileChange}
          isSending={isLoading}
          file={uploadedFile}
          clearFile={() => setUploadedFile(null)}
        />
      </footer>
    </div>
  );
};

export default App;
