import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Services } from '../services';
import { Shared } from '../shared';

export class Controllers {
  protected services: Services;

  protected shared: Shared;

  constructor(services: Services) {
    this.services = services;
    this.shared = new Shared();
  }

  async getByCountry(req: Request, res: Response) {
    try {
      const data = await this.services.getByCountry();
      return res.status(StatusCodes.OK).json(data);
    } catch (error) {
      this.shared.helpers.logger.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          error: error.message || this.shared.utils.errors.generic,
        });
    }
  }

  async getByState(req: Request, res: Response) {
    try {
      const data = await this.services.getByState(req.query.state as string);
      return res.status(StatusCodes.OK).json(data);
    } catch (error) {
      this.shared.helpers.logger.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          error: error.message || this.shared.utils.errors.generic,
        });
    }
  }

  async getByCity(req: Request, res: Response) {
    try {
      const data = await this.services.getByCity(
        req.query.city as string,
        req.query.state as string,
      );
      return res.status(StatusCodes.OK).json(data);
    } catch (error) {
      this.shared.helpers.logger.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          error: error.message || this.shared.utils.errors.generic,
        });
    }
  }
}
