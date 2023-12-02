import { Router, type RequestHandler } from 'express';
import { getOrders } from '../controllers/order';
import checkJwt from '../middlewares/session';
import loggerMiddleware from '../middlewares/logger';

const router = Router();

router.get('/', loggerMiddleware, checkJwt, <RequestHandler>getOrders);

export default router;
