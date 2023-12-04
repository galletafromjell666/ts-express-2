import { Router } from 'express';
import multerMiddleware from '../middlewares/saveFile';
import { saveFile } from '../controllers/file';
import session from '../middlewares/session';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', session, multerMiddleware.single('fileTest'), saveFile);

export default router;
