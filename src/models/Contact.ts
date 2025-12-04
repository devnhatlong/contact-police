export interface Contact {
  id: string;
  ma_xa: string;
  ten_xa: string;
  chief: string;
  mobile?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateContactData extends Omit<Contact, 'id' | 'createdAt' | 'updatedAt'> {}
