import { Schema, model } from 'mongoose';
import { Car } from '../interfaces/Car.interface';

const ItemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      enum: ['petrol', 'electric'],
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const ItemModel = model('items', ItemSchema);

export default ItemModel;
