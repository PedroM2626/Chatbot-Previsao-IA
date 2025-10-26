
import React, { useState, useRef } from 'react';
import { FileData } from '../types';
import { SendIcon } from './icons/SendIcon';
import { PaperclipIcon } from './icons/PaperclipIcon';
import { XCircleIcon } from './icons/XCircleIcon';

interface InputAreaProps {
  onSubmit: (prompt: string) => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSending: boolean;
  file: FileData | null;
  clearFile: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onSubmit, onFileChange, isSending, file, clearFile }) => {
  const [prompt, setPrompt] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (prompt.trim() || file) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {file && (
        <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-700 px-3 py-2 text-sm text-slate-300">
          <div className="flex items-center gap-2 overflow-hidden">
            <PaperclipIcon className="h-5 w-5 flex-shrink-0 text-slate-400" />
            <span className="truncate font-medium">{file.name}</span>
          </div>
          <button
            onClick={clearFile}
            className="p-1 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 rounded-full"
            aria-label="Remover arquivo"
          >
            <XCircleIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className="flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 p-2 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow duration-200">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 text-slate-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full transition-colors"
          aria-label="Anexar arquivo"
        >
          <PaperclipIcon className="h-6 w-6" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileChange}
          className="hidden"
          accept=".csv, .json, .txt, text/plain, image/*"
        />
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Faça uma pergunta sobre o arquivo ou digite uma mensagem..."
          className="flex-1 bg-transparent resize-none outline-none text-slate-200 placeholder-slate-500 px-2"
          rows={1}
          disabled={isSending}
        />
        <button
          onClick={handleSend}
          disabled={isSending || (!prompt.trim() && !file)}
          className="p-3 bg-indigo-600 text-white rounded-lg disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          aria-label="Enviar mensagem"
        >
          {isSending ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <SendIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputArea;
