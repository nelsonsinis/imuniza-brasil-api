import express from 'express';

export class Application {
  public port: number | string;

  protected app: express.Application;

  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = express();
  }

  listen(message: string) {
    this.app.listen(this.port, () => {
      console.info(message);
    });
  }
}
