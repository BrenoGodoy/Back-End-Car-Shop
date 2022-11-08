import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import Car from '../../../models/cars';
import { carWithId, request, updatedCar } from '../../mocks/mocks';

const { expect } = chai;
const car = new Car();

describe('MODEL', () => {
  describe('Create', async () => {
    before(async () => {
      sinon
        .stub(Model, 'create')
        .resolves(carWithId);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Success Create', async () => {});
      const response = await car.create(request);
      expect(response).to.be.deep.equal(carWithId);
  });
  describe('FIND', async () => {
    const cars = [carWithId];
    before(async () => {
      sinon
        .stub(Model, 'find')
        .resolves(cars);
    });
  
    after(()=>{
      sinon.restore();
    })
    it('Success Find', async () => {
      const response = await car.read();
      expect(response).to.be.deep.equal(cars);
    });
  });
  describe('FIND ONE', async () => {
    const cars = [carWithId];
    before(async () => {
      sinon
        .stub(Model, 'findOne')
        .resolves(carWithId);
    });
  
    after(()=>{
      sinon.restore();
    })
    it('Success Find', async () => {
      const ID = '4edd40c86762e0fb12000003'
      const response = await car.readOne(ID);
      expect(response).to.be.deep.equal(carWithId);
    });
    it('Fail Find', async () => {
      let message;
      try {
        const response = await car.readOne('1');
      } catch(err: any) {
        message = err.message;
      }
      expect(message).to.be.deep.equal('InvalidMongoId');
    });
  });
  // describe('UPDATE', async () => {
  //   const cars = [carWithId];
  //   before(async () => {
  //     sinon
  //       .stub(Model, 'update')
  //       .resolves(updatedCar);
  //   });
  
  //   after(()=>{
  //     sinon.restore();
  //   })
  //   it('Success Update', async () => {
  //     const ID = '4edd40c86762e0fb12000003'
  //     const response = await car.update(ID, carWithId);
  //     expect(response).to.be.deep.equal(carWithId);
  //   });
  //   it('Fail Update', async () => {
  //     let message;
  //     try {
  //       const response = await car.update('1', carWithId);
  //     } catch(err: any) {
  //       message = err.message;
  //     }
  //     expect(message).to.be.deep.equal('InvalidMongoId');
  //   });
  // });
});
