import * as express from 'express';
import Motorcycle from '../models/motorcycle'; 
import ControllerMotos from '../controllers/motorcycles';
import ServiceMotos from '../services/motorcycles';
import middleware from '../middlewares/getOne.mid';
import 
{
  qty, 
  verifyExists, verifyTypes, verifyTypes2 } from '../middlewares/registerNewMoto';

const route = express.Router();

const motorcycles = new ControllerMotos(new ServiceMotos(new Motorcycle()));

route.post(
  '/',
  [qty, verifyExists, verifyTypes, verifyTypes2],
  (req: express.Request, res: express.Response) => {
    motorcycles.registerNewMoto(req, res);
  },
);

route.get('/', (req: express.Request, res: express.Response) => {
  motorcycles.getAll(req, res);
});

route.get('/:id', middleware, (req: express.Request, res: express.Response) => {
  motorcycles.getOne(req, res);
});

route.put(
  '/:id', 
  [middleware, qty, verifyExists, verifyTypes, verifyTypes2],
  (req: express.Request, res: express.Response) => {
    motorcycles.update(req, res);
  },
);

route.delete('/:id', middleware, (req: express.Request, res: express.Response) => {
  motorcycles.delete(req, res);
});

export default route;
