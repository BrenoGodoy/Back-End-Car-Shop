import * as express from 'express';
import ControllerCars from '../controllers/cars';
import ServiceCars from '../services/cars';
import Car from '../models/cars';
import middleware from '../middlewares/getOne.mid';
import 
{
  doorsAndSeatsQty, 
  verifyExists, verifyTypes, verifyTypes2 } from '../middlewares/registeNewCar.mid';

const route = express.Router();

const cars = new ControllerCars(new ServiceCars(new Car()));

route.post(
  '/', 
  [doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2],

  (req: express.Request, res: express.Response) => {
    cars.registerNewCar(req, res);
  },
);

route.get('/', (req: express.Request, res: express.Response) => {
  cars.getAll(req, res);
});

route.get('/:id', middleware, (req: express.Request, res: express.Response) => {
  cars.getOne(req, res);
});

route.put(
  '/:id', 
  [middleware, doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2],

  (req: express.Request, res: express.Response) => {
    cars.update(req, res);
  },
);

export default route;
