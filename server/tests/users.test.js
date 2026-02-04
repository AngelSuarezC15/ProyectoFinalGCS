const request = require('supertest');
const createApp = require('../app');

describe('Users API', () => {

    test('GET devuelve usuarios', async () => {
        const fakePool = {
            query: jest.fn().mockResolvedValue([[{ id: 1, name: 'Victor', email: 'v@mail.com' }]])
        };

        const app = createApp(fakePool);

        const res = await request(app).get('/api/users');

        expect(res.status).toBe(200);
        expect(res.body[0].name).toBe('Victor');
    });

    test('POST crea usuario', async () => {
  const fakePool = {
    query: jest
      .fn()
      .mockResolvedValueOnce([[{ count: 0 }], []]) // check
      .mockResolvedValueOnce([{
        fieldCount: 0,
        affectedRows: 1,
        insertId: 5
      }, undefined]) // insert realista
  };

  const app = createApp(fakePool);

  const res = await request(app)
    .post('/api/users')
    .send({ name: 'Ana', email: 'ana@mail.com' });

  expect(res.status).toBe(201);
  expect(res.body.id).toBe(5);
});



});
