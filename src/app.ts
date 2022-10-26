import express from 'express';
import cars from './routers/cars';

const app = express();
app.use(express.json());
app.use('/cars', cars);

export default app;
