import { Request, Response } from 'express';
import ServiceMotos from '../services/motorcycles';

class ControllerMotos {
  constructor(private serviceMotos: ServiceMotos) {}
  async registerNewMoto(req: Request, res: Response) {
    const { code, response, message } = await this.serviceMotos.registerNewMoto(req.body);
    if (message) return res.status(code).json({ message });
    return res.status(code).json(response);
  }

  async getAll(req: Request, res: Response) {
    const { code, response, message } = await this.serviceMotos.getAll();
    if (message) return res.status(code).json({ message });
    return res.status(code).json(response);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const { code, response, error } = await this.serviceMotos.getOne(id);
    if (error) return res.status(code).json({ error });
    return res.status(code).json(response);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { code, response, error } = await this.serviceMotos.update(id, req.body);
    if (error) return res.status(code).json({ error });
    return res.status(code).json(response);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { code, response, error } = await this.serviceMotos.delete(id);
    if (error) return res.status(code).json({ error });
    return res.status(code).json(response);
  }
}

export default ControllerMotos;
