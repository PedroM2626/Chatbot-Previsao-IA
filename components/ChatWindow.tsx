
import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="space-y-6">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatWindow;
