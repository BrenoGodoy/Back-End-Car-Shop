import * as sinon from 'sinon';
import chai from 'chai';
import ServiceCars from '../../../services/cars';
import Car from '../../../models/cars';
import { carWithId, request } from '../../mocks/mocks';

const { expect } = chai;

const car = new Car();
const service = new ServiceCars(car);

describe('SERVICE', () => {
  afterEach(()=> sinon.restore());
  describe('CREATE', async () => {
  
    it('Succes Create', async () => {
      sinon.stub(car, 'create').resolves(carWithId);
      const response = await service.registerNewCar(request);
      expect(response.code).to.be.equal(201);
      expect(response.response).to.be.deep.equal(carWithId);
    });
  });
  describe('READ', async () => {
    it('Success Read', async () => {
      const cars = [carWithId];

      sinon
        .stub(car, 'read')
        .resolves(cars);
      const response = await service.getAll();
      expect(response.code).to.be.equal(200);
      expect(response.response).to.be.deep.equal([carWithId]);
    });
  });
    describe('READ ONE', async () => {
      it('Succes ReadOne', async () => {
        sinon.stub(car, 'readOne').resolves(carWithId);
        const response = await service.getOne('4edd40c86762e0fb12000003');
        expect(response.code).to.be.eq(200);
        expect(response.response).to.be.deep.equal(carWithId);
      });
      it('Fail ReadOne', async () => {
        let message;
        try {
          const response = await car.readOne('1');
        } catch(err: any) {
          message = err.message;
        }
        expect(message).to.be.deep.equal('InvalidMongoId');
      });
    });
    describe('READ ONE', async () => {
      it('Succes Update', async () => {
        sinon.stub(car, 'update').resolves(carWithId);
        const response = await service.update('4edd40c86762e0fb12000003', carWithId);
        expect(response.code).to.be.eq(200);
        expect(response.response).to.be.deep.equal(carWithId);
      });
      it('Fail Update', async () => {
        let message;
        try {
          const response = await car.update('1', carWithId);
        } catch(err: any) {
          message = err.message;
        }
        expect(message).to.be.deep.equal('InvalidMongoId');
      });
    });
});
