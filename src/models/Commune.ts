export interface Commune {
  id: string;
  ma_xa: string;
  ten_xa: string;
  name: string;
  loai: string;
  cap: number;
  ma_tinh: string;
  ten_tinh: string;
  dan_so: number;
  dtich_km2: number;
  matdo_km2: number;
  address: string;
  tru_so: string;
  sap_nhap: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateCommuneData extends Omit<Commune, 'id' | 'createdAt' | 'updatedAt'> {}
