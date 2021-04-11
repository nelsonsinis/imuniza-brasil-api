import mongoose from 'mongoose';
import { Shared } from '../../shared';

const shared = new Shared();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    shared.helpers.logger.info('Mongo is connected!');
  })
  .catch((error) => {
    shared.helpers.logger.error(error);
    process.exit(1);
  });
