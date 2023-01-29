import { isValidUserId, isValidUser, isValidEmail } from '../../helper/validation';
import ExceptionType from '../../helper/exceptions.type';
import { Request, Response, NextFunction } from 'express';

describe('isValidUserId function', () => {
  test('should return succes', () => {
    const mRequest: Request = { params: { id: 1 } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    isValidUserId(mRequest, mResponse, mNext);

    expect(mNext).toHaveBeenCalled();
  });

  test('should return exception', () => {
    const mRequest: Request = { params: { id: 1 } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    try {
      isValidUserId(mRequest, mResponse, mNext);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NOT_FOUND_GET.message);
    }
  });
});

describe('isValidUser function', () => {
  test('should return succes', () => {
    const mRequest: Request = { body: { name: 'Polina', surname: 'Zdanovich' } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    isValidUser(mRequest, mResponse, mNext);

    expect(mNext).toHaveBeenCalled();
  });

  test('should return exception: name is not exist', () => {
    const mRequest: Request = { body: { name: '', surname: 'Zdanovich' } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    try {
      isValidUser(mRequest, mResponse, mNext);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NAME_NOT_VALID.message);
    }
  });

  test('should return exception: surname is not exist', () => {
    const mRequest: Request = { body: { name: 'Polina', surname: '' } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    try {
      isValidUser(mRequest, mResponse, mNext);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_SURNAME_NOT_VALID.message);
    }
  });
});

describe('isValidEmail function', () => {
  test('should return succes', () => {
    const mRequest: Request = { body: { email: 'polina@mail.ru' } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    isValidEmail(mRequest, mResponse, mNext);

    expect(mNext).toHaveBeenCalled();
  });

  test('should return exception: email is not valid', () => {
    const mRequest: Request = { body: { email: 'polinamail.ru' } };
    const mResponse: Response = jest.fn();
    const mNext: NextFunction = jest.fn();

    try {
      isValidEmail(mRequest, mResponse, mNext);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_EMAIL_NOT_VALID.message);
    }
  });
});
