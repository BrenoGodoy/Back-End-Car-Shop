import * as express from 'express';
import ControllerCars from '../controllers/cars';
import ServiceCars from '../services/cars';

const router = express.Router();

const cars = new ControllerCars(new ServiceCars('model'));

router.post('/', (req, res) => {
  cars.registerNewCar(req, res);
});

export default router;
