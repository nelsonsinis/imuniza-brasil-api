import { ICity } from './States';

export interface IBrazil {
  total: number;
}

export interface IState {
  name: string;
  uuid: string;
  quantityPatients?: number;
  cities: Array<ICity>;
}
