import { expect } from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';
import server from '../../server';

const api = supertest(server);

describe('Business controller', async () => {
  describe('Create scheduler ', () => {
    it('should return a status of 200', (done) => {
      api.get('/api/v1/scheduler').end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
});
