import { Request, Response, NextFunction } from 'express';
import ExceptionType from '../helper/exceptions.type';

function isValidUserId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!id) throw new Error(ExceptionType.USER_ID_NOT_VALID.message);
  next();
}

function isValidUser(req: Request, res: Response, next: NextFunction) {
  const { name, surname } = req.body;
  if (!name) throw new Error(ExceptionType.USER_NAME_NOT_VALID.message);
  if (!surname) throw new Error(ExceptionType.USER_SURNAME_NOT_VALID.message);
  next();
}

function isValidEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  if (!/^[0-9a-z\.-_]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error(ExceptionType.USER_EMAIL_NOT_VALID.message);
  next();
}

export { isValidUserId, isValidUser, isValidEmail };
