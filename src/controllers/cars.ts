import { Request, Response } from 'express';
import ServiceCars from '../services/cars';

class ControllerCars {
  constructor(private serviceCars: ServiceCars) {}
  async registerNewCar(req: Request, res: Response) {
    const { code, response, message } = await this.serviceCars.registerNewCar(req.body);
    if (message) return res.status(code).json({ message });
    return res.status(code).json(response);
  }

  async getAll(req: Request, res: Response) {
    const { code, response, message } = await this.serviceCars.getAll();
    if (message) return res.status(code).json({ message });
    return res.status(code).json(response);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const { code, response, error } = await this.serviceCars.getOne(id);
    if (error) return res.status(code).json({ error });
    return res.status(code).json(response);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { code, response, error } = await this.serviceCars.update(id, req.body);
    if (error) return res.status(code).json({ error });
    return res.status(code).json(response);
  }
}

export default ControllerCars;
