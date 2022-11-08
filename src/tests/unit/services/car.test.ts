import * as sinon from 'sinon';
import chai from 'chai';
import ServiceCars from '../../../services/cars';
import Car from '../../../models/cars';
import { carWithId, request } from '../../mocks/mocks';

const { expect } = chai;

describe('Car Service', async () => {

  const car = new Car();
  const service = new ServiceCars(new Car());

  afterEach(()=> sinon.restore());

  it('create', async () => {
    sinon
      .stub(service, 'registerNewCar')
      .resolves({ code: 201, response: carWithId });
    const response = await service.registerNewCar(request);
    expect(response.code).to.be.equal(201);
    expect(response.response).to.be.deep.equal(carWithId);
  });
  it('read', async () => {
    sinon
      .stub(service, 'getAll')
      .resolves({ code: 200, response: [carWithId] });
    const response = await service.getAll();
    expect(response.code).to.be.equal(200);
    expect(response.response).to.be.deep.equal([carWithId]);
  });
  // it('readOne', async () => {
  //   sinon
  //     .stub(car, 'read')
  //     .resolves([carWithId]);
  //   const response = await service.getOne('635495a97e1e13e479011e2d');
  //   expect(response.code).to.be.eq(200);
  //   expect(response.response).to.be.an('array');
  //   expect(response.response).to.be.deep.equal([carWithId]);
  // });
});
