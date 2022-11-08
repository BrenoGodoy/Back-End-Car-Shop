import express from 'express';
import cars from './routers/cars';
import motorcycles from './routers/motorcycles';

const app = express();
app.use(express.json());
app.use('/cars', cars);
app.use('/motorcycles', motorcycles);

export default app;
