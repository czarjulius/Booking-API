import { expect } from 'chai';
import request from 'supertest';
import server from '../../server';

describe('Clients APIs', async () => {
  describe('POST /api/v1/booking - test 200, 400 codes', () => {
    it('should create bookings when agent is assigned to user', (done) => {
      request(server)
        .post('/api/v1/booking')
        .set('x-agent-id', 'admin')
        .set('Accept', 'application/json')
        .send({
          userId: 1,
          agentId: 2,
          startAt: '2021-06-09',
          finishAt: '2021-06-10'
        })
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.code).to.be.equal(200);
          expect(res.body.message).to.be.equal('Booking created successfully');
          done();
        });
    });
    it('should throw error when agent is not assigned to user', (done) => {
      request(server)
        .post('/api/v1/booking')
        .set('x-agent-id', 'admin')
        .set('Accept', 'application/json')
        .send({
          userId: 6,
          agentId: 2,
          startAt: '2021-06-09 14:05:50',
          finishAt: '2021-06-10 14:05:50'
        })
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(403);
          expect(res.body.code).to.be.equal(403);
          expect(res.body.message).to.be.equal('User is not assigned to agent');
          done();
        });
    });
  });

  describe('DELETE /api/v1/booking/:id - test 200, 400 codes', () => {
    xit('should delete booking when agent is admin', (done) => {
      request(server)
        .delete('/api/v1/booking/1')
        .set('x-agent-id', 'admin')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.code).to.be.equal(200);
          expect(res.body.message).to.be.equal('Booking deleted successfully');
          done();
        });
    });
    it('should throw error when agent is regular', (done) => {
      request(server)
        .delete('/api/v1/booking/3')
        .set('x-agent-id', 'regular')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(403);
          expect(res.body.code).to.be.equal(403);
          expect(res.body.message).to.be.equal('Only admin agents are allowed');
          done();
        });
    });
  });
});
