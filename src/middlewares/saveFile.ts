import { Request } from 'express';
import multer, { diskStorage } from 'multer';

const PATH_STORAGE = `${process.cwd()}/storage`;

type MulterCallBack = (a: null, b: string) => void;

const storage = diskStorage({
  destination(_req: Request, _file: Express.Multer.File, cb: MulterCallBack) {
    cb(null, PATH_STORAGE);
  },
  filename(_req: Request, file: Express.Multer.File, cb: MulterCallBack) {
    const ext = file.originalname.split('.').pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
