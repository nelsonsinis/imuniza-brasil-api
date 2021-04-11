export interface ICity {
  name: string;
  quantityPatients: number;
}

export interface IState {
  name: string;
  uuid: string;
  totalCities: number;
  cities: Array<ICity>;
}
