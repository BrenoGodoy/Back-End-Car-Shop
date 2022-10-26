// import { IModel } from '../interfaces/IModel';

class ServiceCars {
  constructor(private model: string) {}
  registerNewCar() {
    if (this.model === 'string') return { code: 400, message: 'erro!' };
    return { code: 200, response: this.model };
  }
}

export default ServiceCars;
