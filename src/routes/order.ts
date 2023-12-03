import { Router, type RequestHandler } from 'express';
import { getOrders } from '../controllers/order';
import session from '../middlewares/session';
import loggerMiddleware from '../middlewares/logger';

const router = Router();

router.get('/', loggerMiddleware, <RequestHandler>session, getOrders);

export default router;
