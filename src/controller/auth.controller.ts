import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';
import { createUser, doAuthorisation } from '../services/auth.service';
import { isValidEmail, isValidUser } from '../helper/validation';

const route = express.Router();

route.post('/reg', isValidUser, isValidEmail, async function (req: Request, res: Response) {
  try {
    const { name, surname, pwd, email } = req.body;
    await createUser(name, surname, pwd, email);
    buildResponse(res, 200, 'success');
  } catch (error) {
    handleError(res, 404, error);
  }
});

route.post('/auth', isValidEmail, async function (req: Request, res: Response) {
  try {
    const { pwd, email } = req.body;
    await doAuthorisation(pwd, email);
    buildResponse(res, 200, 'success');
  } catch (error) {
    handleError(res, 404, error);
  }
});

export default route;
