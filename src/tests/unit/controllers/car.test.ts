import Sinon, * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/cars';
import { carWithId, request } from '../../mocks/mocks';
import ServiceCars from '../../../services/cars';
import ControllerCars from '../../../controllers/cars';
import { Request, Response } from 'express';

const { expect } = chai;
const car = new Car();
const service = new ServiceCars(car);
const controller = new ControllerCars(service);

describe('CONTROLLER', () => {

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub().returns(res);
  });

  afterEach(()=> sinon.restore());
  describe('CREATE', () => {
    it('Success Create', async () => {
      sinon
        .stub(service, 'registerNewCar')
        .resolves({ code: 201, response: carWithId });
      await controller.registerNewCar(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.true;
    });
  });
  describe('READ', () => {
    it('Success Read', async () => {
      sinon
        .stub(service, 'getAll')
        .resolves({ code: 200, response: [carWithId] });
      await controller.getAll(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });
});
