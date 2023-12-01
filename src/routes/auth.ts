import { Router, type RequestHandler } from 'express';
import { authenticate, register } from '../controllers/auth';

const router = Router();

router.post('/register', <RequestHandler>register);
router.post('/login', <RequestHandler>authenticate);

export default router;
