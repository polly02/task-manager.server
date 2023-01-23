import { Response } from 'express';

function handleError(res: Response, status: number, message) {
  res.status(status);
  res.send(message);
}

export { handleError };
