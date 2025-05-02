import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './app/routes';

dotenv.config();

const app: Application = express();

app.use(cors({
  origin: ['http://localhost:3000',"https://eventcraft-lemon.vercel.app"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('✅ Server is working!');
});

export default app;
