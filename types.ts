
export type MessageRole = 'user' | 'ai';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  fileName?: string;
  fileContent?: string;
  downloadFileName?: string;
}

export interface FileData {
  name: string;
  type: string;
  content: string; // Base64 for images, text content for others
  isImage: boolean;
}
