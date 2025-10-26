
import React from 'react';
import { BotIcon } from './icons/BotIcon';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-4">
      <BotIcon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
      <div className="max-w-2xl rounded-xl px-5 py-4 shadow-md bg-slate-700 rounded-bl-none">
        <div className="flex items-center space-x-1">
          <span className="text-slate-300">Analisando</span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
