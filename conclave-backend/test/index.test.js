import { expect, server, BASE_URL } from './setup';

// eslint-disable-next-line no-undef
describe('Index page test', () => {
  // eslint-disable-next-line no-undef
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Hello! Nothing else has been made. Whip Raz to work :squerp:',
        );
        done();
      });
  });
});
