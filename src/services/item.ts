import { Car } from '../interfaces/Car.interface';
import ItemModel from '../models/item';

const getItemById = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const getAllItems = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};

const createItem = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const updateItemById = async (id: string, newData: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, newData, {
    new: true,
  });
  return responseItem;
};

const deleteItemById = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id });
  return responseItem;
};
export { createItem, getAllItems, getItemById, updateItemById, deleteItemById };
