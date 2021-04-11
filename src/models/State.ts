import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: 'string',
      required: true,
    },
    uuid: {
      type: 'string',
      required: true,
    },
    quantityPatients: {
      type: 'number',
      default: 0,
    },
    cities: [
      {
        name: {
          type: 'string',
          required: true,
        },
        quantityPatients: {
          type: 'number',
          default: 0,
        },
      },
    ],
  },
  {
    _id: true,
    timestamps: true,
    collection: 'states',
  },
);

export default model('state', schema);
