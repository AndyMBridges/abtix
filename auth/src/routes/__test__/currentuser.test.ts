import request from 'supertest';
import { app } from '../../app';


it('responds with details of current user', async () => {
  const cookie = await signin();

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

    expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('clears the cookie after signout', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
 
  const response = await request(app)
    .post('/api/users/signout')
    .send({})
    .expect(200);
 
  expect(
    response.get('Set-Cookie').shift()
  ).toMatch(/1970/);
});


it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

    expect(response.body.currentUser).toEqual(null);
});