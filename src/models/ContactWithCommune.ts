import { Commune } from './Commune';
import { Contact } from './Contact';

/**
 * Model kết hợp Contact với thông tin Commune
 */
export interface ContactWithCommune {
  id: string;
  ma_xa: string;
  fullName: string;  // chief name
  mobile?: string | null;
  communeInfo?: Commune | null;
  createdAt?: Date;
  updatedAt?: Date;
}
