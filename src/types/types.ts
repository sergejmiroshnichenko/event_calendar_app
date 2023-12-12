export interface IEvent {
  title: string;
  description: string;
  date: string;
  time: string;
  id?: string;
  background?: string;
  createdAt?: string;
  lastUpdatedTime?: string | null;
}

export interface INotificationVisible {
  visible: boolean;
  type?: 'add' | 'remove' | null;
}
