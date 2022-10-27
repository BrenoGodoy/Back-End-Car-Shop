import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import Car from '../../../models/cars';
import { carWithId, request } from '../../mocks/mocks';

const { expect } = chai;
const car = new Car();

describe('Car Model', async () => {

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Create', async () => {});
    const response = await car.create(request);
    expect(response).to.be.deep.equal(carWithId);
});
