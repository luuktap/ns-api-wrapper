import express from 'express';
import { router as tripsRouter } from './tripController';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use('/trips', tripsRouter);

app.get('/', (req, res) => {
  res.send({ message: 'NS Wrapper API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
