import type { Storage } from '../interfaces/storage.interface';
import StorageModel from '../models/storage';

const registerUpload = async ({ fileName, userId, path }: Storage) => {
  if (!fileName || !userId || !path) return Promise.reject();
  const responseItem = await StorageModel.create({ fileName, userId, path });
  return responseItem;
};

export default registerUpload;
