import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';
import dbConnect from './config/mongo';
import logger from './utils/logger';

const PORT = process.env.PORT ?? 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
void dbConnect().then(() => logger.info('DB connected'));
app.listen(PORT, () => logger.info(`SERVER RUNNING ON PORT ${PORT}`));
