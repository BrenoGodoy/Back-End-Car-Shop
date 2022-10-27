import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class ServiceCars {
  constructor(private model: IModel<ICar>) {}
  async registerNewCar(body: ICar) {
    const response = await this.model.create(body);
    if (!response) return { code: 400, message: 'erro' };
    return { code: 201, response };
  }
  async getAll() {
    const response = await this.model.read();
    if (!response) return { code: 400, message: 'erro' };
    return { code: 200, response };
  }
}

export default ServiceCars;
