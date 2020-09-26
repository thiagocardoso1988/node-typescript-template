/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import app from '@app/app';

describe('when success', () => {
  it('should return 200', (done) => {
    request(app)
      .get('/start')
      .then((response: request.Response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it('should be content-type JSON', async () => {
    await request(app)
      .get('/start')
      .expect('Content-Type', /json/);
  });
});
