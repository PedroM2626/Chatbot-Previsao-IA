
import React from 'react';
import { ChatMessage } from '../types';
import { UserIcon } from './icons/UserIcon';
import { BotIcon } from './icons/BotIcon';
import { FileIcon } from './icons/FileIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface MessageProps {
  message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  const formattedText = message.text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const handleDownload = () => {
    if (!message.fileContent || !message.downloadFileName) return;

    let mimeType = 'text/plain';
    if (message.downloadFileName.endsWith('.csv')) {
      mimeType = 'text/csv';
    } else if (message.downloadFileName.endsWith('.json')) {
      mimeType = 'application/json';
    }

    const blob = new Blob([message.fileContent], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', message.downloadFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <BotIcon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />}
      <div
        className={`max-w-2xl rounded-xl px-5 py-3 shadow-md ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-slate-700 text-slate-200 rounded-bl-none'
        }`}
      >
        {message.fileName && (
          <div className="mb-2 flex items-center gap-2 rounded-md border border-slate-500 bg-slate-600/50 px-3 py-1.5 text-sm text-slate-300">
            <FileIcon className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{message.fileName}</span>
          </div>
        )}
        <p className="whitespace-pre-wrap">{formattedText}</p>
        {message.fileContent && message.downloadFileName && (
          <div className="mt-4 border-t border-slate-600 pt-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-700"
            >
              <DownloadIcon className="h-5 w-5" />
              Baixar {message.downloadFileName}
            </button>
          </div>
        )}
      </div>
      {isUser && <UserIcon className="w-8 h-8 text-indigo-400 flex-shrink-0 mt-1" />}
    </div>
  );
};

export default Message;
