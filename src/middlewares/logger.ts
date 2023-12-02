import { type Response, type Request, type NextFunction } from 'express';
import logger from '../utils/logger';

const loggerMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  logger.info(
    `Request received from ${req.baseUrl} ${JSON.stringify(req.headers)}`,
  );
  next();
};

export default loggerMiddleware;
