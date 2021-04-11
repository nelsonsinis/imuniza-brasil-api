import { StatusCodes } from 'http-status-codes';
import { Database } from '../interfaces';
import { BrazilRepository, StatesRepository } from '../repositories';
import { Shared } from '../shared';

export class Services {
  protected brazilRepository: BrazilRepository;

  protected statesRepository: StatesRepository;

  protected shared: Shared;

  constructor() {
    this.brazilRepository = new BrazilRepository();
    this.statesRepository = new StatesRepository();
    this.shared = new Shared();
  }

  async getByCountry() {
    const response = await this.brazilRepository.findOne();

    if (!response) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: this.shared.utils.errors.notFound('country'),
      };
    }

    return response;
  }

  async getByState(state: string) {
    const response = await this.statesRepository.findOne({
      uuid: state,
    });

    if (!response) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: this.shared.utils.errors.notFound('state'),
      };
    }

    return response;
  }

  async getByCity(city: string, state?: string) {
    const query: any = {
      cities: {
        $elemMatch: {
          name: city,
        },
      },
    };

    if (state) {
      query.uuid = state;
    }

    const response = ((await this.statesRepository.findOne(
      query,
    )) as unknown) as Database.IState;

    if (!response) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: this.shared.utils.errors.notFound('city'),
      };
    }

    const savedCity = response.cities.find((item) => item.name === city);

    return savedCity;
  }
}
