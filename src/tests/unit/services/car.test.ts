import * as sinon from 'sinon';
import chai from 'chai';
import ServiceCars from '../../../services/cars';
import Car from '../../../models/cars';
import { carWithId, request } from '../../mocks/mocks';

const { expect } = chai;
const car = new Car();
const service = new ServiceCars(new Car());

describe('Car Service', () => {

  afterEach(()=> sinon.restore());

  it('create', async () => {
    sinon
      .stub(service, 'registerNewCar')
      .resolves({ code: 201, response: carWithId });
    const response = await service.registerNewCar(request);
    expect(response.code).to.be.equal(201);
    expect(response.response).to.be.deep.equal(carWithId);
  });
});
