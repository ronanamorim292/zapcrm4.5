export type ContactStatus = 'Novo' | 'Atendimento' | 'Finalizado' | 'Aguardando';

export interface Contact {
  id: string;
  name: string;
  status: ContactStatus;
  lastMessage: string;
  time: string;
  agent: string;
  avatar?: string;
  unreadCount?: number;
  phone?: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'agent' | 'client';
  timestamp: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'offline';
  avatar?: string;
}
