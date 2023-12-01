import { type Response, type Request, type NextFunction } from 'express';
import logger from '../utils/logger';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request received from ${req.baseUrl} ${req.headers.origin}`);
  next();
};

export default loggerMiddleware;
