import express from 'express';
import { Shared } from '../../shared';
import { Router } from '../../routes';

export class Application {
  public port: number | string;

  protected app: express.Application;

  protected shared: Shared;

  protected router: Router;

  constructor() {
    this.port = process.env.PORT || 3000;
    this.shared = new Shared();
    this.router = new Router();
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(this.router.router);
  }

  listen(message: string) {
    this.app.listen(this.port, () => {
      this.shared.helpers.logger.info(message);
    });
  }
}
