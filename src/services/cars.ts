import { isValidObjectId } from 'mongoose';
import { ICar, car } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

const error = 'Object not found';

class ServiceCars {
  constructor(private model: IModel<ICar>) {}
  async registerNewCar(body: ICar) {
    const response = await this.model.create(body);
    if (!response) return { code: 404, message: 'erro' };
    return { code: 201, response };
  }
  async getAll() {
    const response = await this.model.read();
    if (!response) return { code: 404, message: 'erro' };
    return { code: 200, response };
  }
  async getOne(id: string) {
    const response = await this.model.readOne(id);
    if (!response) return { code: 404, error };
    return { code: 200, response };
  }
  async update(id: string, body: ICar) {
    if (!isValidObjectId(id)) return { code: 404, error };

    const parsed = car.safeParse(body);
    if (!parsed.success) throw parsed.error;

    const response = await this.model.update(id, parsed.data);
    if (!response) return { code: 404, error };
    return { code: 200, response };
  }
  async delete(id: string) {
    if (!isValidObjectId(id)) return { code: 404, error };

    const response = await this.model.delete(id);
    if (!response) return { code: 404, error };
    return { code: 204 };
  }
}

export default ServiceCars;
