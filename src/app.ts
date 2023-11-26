import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT ?? 3001;

const app = express();
app.use(cors());
