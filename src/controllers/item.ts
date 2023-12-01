import { type Request, type Response } from 'express';
import { handleRequest } from '../utils/error.handler';
import {
  createItem,
  deleteItemById,
  getAllItems,
  getItemById,
  updateItemById,
} from '../services/item';
import { Car } from '../interfaces/car.interface';

const getItem = async (req: Request, resp: Response) => {
  try {
    const response = await getItemById(req.params.id);
    resp.send(response);
  } catch (error) {
    handleRequest(resp, 'ERROR_GET_ITEM', error);
  }
};

const getItems = async (_req: Request, resp: Response) => {
  try {
    const response = await getAllItems();
    resp.send(response);
  } catch (error) {
    handleRequest(resp, 'ERROR_GET_ITEMS', error);
  }
};

type UpdateParams = {
  id?: string;
};

const updateItem = async (
  req: Request<UpdateParams, Response, Car>,
  resp: Response,
) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('INVALID ID');
    const response = await updateItemById(id, req.body);
    resp.send(response);
  } catch (error) {
    handleRequest(resp, 'ERROR_PUT_ITEM', error);
  }
};

const postItem = async (
  req: Request<unknown, Response, Car>,
  resp: Response,
) => {
  try {
    const response = await createItem(req.body);
    resp.send(response);
  } catch (error) {
    handleRequest(resp, 'ERROR_CREATE_ITEM', error);
  }
};

const deleteItem = async (req: Request, resp: Response) => {
  try {
    const response = await deleteItemById(req.params.id);
    resp.send(response);
  } catch (error) {
    handleRequest(resp, 'ERROR_DELETE_ITEM', error);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
