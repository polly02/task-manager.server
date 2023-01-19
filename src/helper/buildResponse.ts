import { Response } from 'express';
import { iTask, iUser } from '../interfaces/interfaces';

function buildResponse(res: Response, status: number, message: string | iTask[] | iUser[]) {
  res.status(status).send(message);
}

export { buildResponse };

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
