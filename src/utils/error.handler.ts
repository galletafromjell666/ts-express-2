import { type Response } from 'express';
import logger from './logger';

const handleRequest = (
  resp: Response,
  errorMessage: string,
  error: unknown,
) => {
  logger.error(errorMessage, error);
  resp.status(500);
  resp.send({ error: errorMessage });
};

export { handleRequest };
