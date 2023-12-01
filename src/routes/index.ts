import { type RequestHandler, Router } from 'express';
import { readdirSync } from 'fs';
import logger from '../utils/logger';

const router = Router();
const ROUTER_PATH = __dirname;
const cleanFileName = (fileName: string) => fileName.split('.').shift();

type RouteModule = NodeModule & { default: RequestHandler };

readdirSync(ROUTER_PATH).forEach((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    // dynamic import
    void import(`./${cleanName}`).then((module: RouteModule) => {
      logger.info(`Adding route ${cleanName}`);
      router.use(`/${cleanName}`, module.default);
    });
  }
});
export default router;
