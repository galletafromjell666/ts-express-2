import { RequestHandler, Router } from 'express';
import { getItem, getItems, postItem, updateItem } from '../controllers/item';
import loggerMiddleware from '../middlewares/logger';

const router = Router();
router.get('/', loggerMiddleware, <RequestHandler>getItems);
router.get('/:id', <RequestHandler>getItem);
router.post('/', <RequestHandler>postItem);
router.put('/:id', <RequestHandler>updateItem);

export default router;
