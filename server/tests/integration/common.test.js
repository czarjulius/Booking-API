import { expect } from 'chai';
import request from 'supertest';
import server from '../../server';

describe('Common APIs', () => {
  describe('GET /api/v1/agents - test 200, 400 codes', () => {
    it('should get all agents when agent is admin', (done) => {
      request(server)
        .get('/api/v1/agents')
        .set('x-agent-id', 'admin')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.code).to.be.equal(200);
          expect(res.body.message).to.be.equal(
            'All agents fetched successfully'
          );
          done();
        });
    });
    it('should throw error when agent is regular', (done) => {
      request(server)
        .get('/api/v1/agents')
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

  describe('GET /api/v1/users/:agentid - test 200, 400 codes', () => {
    it('should get all agents users', (done) => {
      request(server)
        .get('/api/v1/users/2')
        .set('x-agent-id', 'admin')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.code).to.be.equal(200);
          expect(res.body.message).to.be.equal(
            'Agent users fetched successfully'
          );
          done();
        });
    });

    it('should get all agents users when agent is regular', (done) => {
      request(server)
        .get('/api/v1/users/2')
        .set('x-agent-id', 'regular')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.code).to.be.equal(200);
          expect(res.body.message).to.be.equal(
            'Agent users fetched successfully'
          );
          done();
        });
    });

    it('should throw error when agent is neither admin or regular', (done) => {
      request(server)
        .get('/api/v1/users/2')
        .set('x-agent-id', 'super')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(403);
          expect(res.body.code).to.be.equal(403);
          expect(res.body.message).to.be.equal('Only agents are allowed');
          done();
        });
    });
  });
});
