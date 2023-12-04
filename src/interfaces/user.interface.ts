import type { Auth } from './auth.interface';

export interface User extends Auth {
  id?: string;
  name: string;
  description: string;
}
