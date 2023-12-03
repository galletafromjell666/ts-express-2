import { Router } from 'express';
import multerMiddleware from '../middlewares/saveFile';
import { saveFile } from '../controllers/file';
import session from '../middlewares/session';

const router = Router();

router.get('/', session, multerMiddleware.single('fileTest'), saveFile);

export default router;
