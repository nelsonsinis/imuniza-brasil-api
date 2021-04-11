import '../config/database';
import { schedule } from 'node-cron';
import { Api } from '../config';
import { Shared } from '../shared';
import { BrazilAPI, Database, States } from '../interfaces';
import { BrazilRepository, StatesRepository } from '../repositories';

const states: Array<States.IState> = require(`${process.cwd()}/assets/states.json`);

schedule(
  '59 23 */1 * *',
  async () => {
    const { helpers } = new Shared();

    try {
      helpers.logger.info('Updating data...');
      const api = new Api();
      const statesRepository = new StatesRepository();
      const brazilRepository = new BrazilRepository();

      const totalCount = await api.requester.post('/_count');

      const totalResult: BrazilAPI.ICountReponse = totalCount.data;

      await brazilRepository.deleteMany();
      await statesRepository.deleteMany();
      await brazilRepository.insert({
        total: totalResult.count,
      });

      for (const state of states) {
        const { data: stateData } = (await api.requester.post('/_count', {
          query: {
            match: {
              estabelecimento_uf: state.uuid,
            },
          },
        })) as { data: BrazilAPI.ICountReponse };

        const stateToSave: Database.IState = {
          name: state.name,
          uuid: state.uuid,
          quantityPatients: stateData.count,
          cities: [],
        };

        for (const city of state.cities) {
          const { data: cityData } = (await api.requester.post('/_count', {
            query: {
              match: {
                estabelecimento_municipio_nome: helpers.escape(
                  city.name.toUpperCase(),
                ),
              },
            },
          })) as { data: BrazilAPI.ICountReponse };

          stateToSave.cities.push({
            name: city.name,
            quantityPatients: cityData.count,
          });
        }

        await statesRepository.insert(stateToSave);
      }

      helpers.logger.info('Data imported successfully');
    } catch (error) {
      console.error(error);
    }
  },
  {
    timezone: 'America/Sao_Paulo',
  },
);
