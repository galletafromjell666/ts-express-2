import { Router } from 'express';
import { readdirSync } from 'fs';
import { logger } from '../utils/logger';

const router = Router();
const ROUTER_PATH = __dirname;
const cleanFileName = (fileName: string) => fileName.split('.').shift();

readdirSync(ROUTER_PATH).forEach((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    // dynamyc import
    import(`./${cleanName}`).then((module) => {
      logger.info(`Adding route ${cleanName}`);
      router.use(`/${cleanName}`, module.default);
    });
  }
});
export { router };
