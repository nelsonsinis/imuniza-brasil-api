import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    total: {
      type: 'number',
    },
  },
  {
    _id: true,
    timestamps: true,
    collection: 'brazil',
  },
);

export default model('Brazil', schema);
