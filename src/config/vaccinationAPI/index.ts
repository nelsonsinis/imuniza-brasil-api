import axios, { AxiosInstance } from 'axios';

export class Api {
  public requester: AxiosInstance;

  constructor() {
    this.requester = axios.create({
      baseURL: process.env.BRAZIL_API_URL!,
      auth: {
        username: process.env.BRAZIL_API_USERNAME!,
        password: process.env.BRAZIL_API_PASSWORD!,
      },
    });
  }
}
