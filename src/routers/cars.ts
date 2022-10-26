import * as express from 'express';
import ControllerCars from '../controllers/cars';
import ServiceCars from '../services/cars';
import Car from '../models/cars';
import 
{
  doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2 } from '../middlewares/carsMid';

const route = express.Router();

const cars = new ControllerCars(new ServiceCars(new Car()));

route.post(
  '/', 
  [doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2],

  (req: express.Request, res: express.Response) => {
    cars.registerNewCar(req, res);
  },
);

export default route;
