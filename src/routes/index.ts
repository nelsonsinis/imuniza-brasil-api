import { Router as ExpressRouter } from 'express';
import { Controllers } from '../controllers';
import { Services } from '../services';

export class Router {
  protected controllers: Controllers;

  public router: ExpressRouter;

  constructor() {
    this.controllers = new Controllers(new Services());
    this.router = ExpressRouter();
    this.init();
  }

  init() {
    this.router.get('/countries', (req, res) =>
      this.controllers.getByCountry(req, res),
    );
    this.router.get('/states', (req, res) =>
      this.controllers.getByState(req, res),
    );
    this.router.get('/cities', (req, res) =>
      this.controllers.getByCity(req, res),
    );
  }
}
