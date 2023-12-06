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