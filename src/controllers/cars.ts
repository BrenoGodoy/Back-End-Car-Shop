import { Request, Response } from 'express';
import ServiceCars from '../services/cars';

class ControllerCars {
  constructor(private serviceCars: ServiceCars) {}
  async registerNewCar(req: Request, res: Response) {
    const { code, response, message } = await this.serviceCars.registerNewCar(req.body);
    if (message) return res.status(code).json({ message });
    return res.status(code).json(response);
  }
}

export default ControllerCars;
