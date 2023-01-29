import request from 'supertest';
import app from '../../app';
import { iTask } from '../../interfaces/interfaces';

const endPointUrlTask = '/task/';

let task: iTask;

describe(`Task ${endPointUrlTask}`, () => {
  test(' POST/:id', async () => {
    const res = await request(app).post(endPointUrlTask).send({ task: '1', user_id: 6 });

    task = res.body[0];

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  test('GET', async () => {
    const res = await request(app).get(endPointUrlTask);

    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  test('GET/:id', async () => {
    const res = await request(app).get(endPointUrlTask + task.id);

    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  test('PUT/:id', async () => {
    const res = await request(app)
      .put(endPointUrlTask + task.id)
      .send({ task: '2', user_id: 6 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  test('PATCH/:id', async () => {
    const res = await request(app)
      .patch(endPointUrlTask + task.id)
      .send({ task: '3' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  test('DELETE/:id', async () => {
    const res = await request(app).delete(endPointUrlTask + task.id);

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
