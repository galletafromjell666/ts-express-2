import { RequestHandler, Router } from 'express';
import { getItem, getItems, postItem, updateItem } from '../controllers/item';

const router = Router();
router.get('/', <RequestHandler>getItems);
router.get('/:id', <RequestHandler>getItem);
router.post('/', <RequestHandler>postItem);
router.put('/:id', <RequestHandler>updateItem);

export default router;
