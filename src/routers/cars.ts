import * as express from 'express';
import ControllerCars from '../controllers/cars';
import ServiceCars from '../services/cars';
import Car from '../models/cars';
import 
{ emptyRequest,
  doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2 } from '../middlewares/carsMid';

const router = express.Router();

const cars = new ControllerCars(new ServiceCars(new Car()));

router.post(
  '/', 
  [emptyRequest, doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2],

  (req: express.Request, res: express.Response) => {
    cars.registerNewCar(req, res);
  },
);

export default router;
