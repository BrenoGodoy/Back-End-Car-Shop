import * as express from 'express';
import Motorcycle from '../models/motorcycle'; 

const route = express.Router();

const motorcycles = new ControllerMotos(new ServiceMotos(new Motorcycle()));

route.post(
  '/',
  (req: express.Request, res: express.Response) => {
    motorcycles.registerNewCar(req, res);
  },
);

export default route;
