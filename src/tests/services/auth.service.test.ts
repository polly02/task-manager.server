import bcrypt from 'bcrypt';
import { createUser, doAuthorisation } from '../../services/auth.service';
import * as repository from '../../repository/auth.repository';
import ExceptionType from '../../helper/exceptions.type';

describe('createUser function', () => {
  test('should return succes', async () => {
    const mockGet = jest.spyOn(repository, 'getUserByEmailDB');
    const mockHash = jest.spyOn(bcrypt, 'hash');
    const mockCreate = jest.spyOn(repository, 'createUserDB');

    mockGet.mockResolvedValue([]);
    mockHash.mockResolvedValue('$2b$10$i2xYLZ6qfjy90VgJ09/5DeAAH9QtRDPvX7I/nYtFR0omynCHy2DOy');
    mockCreate.mockResolvedValue();

    await createUser('name', 'surname', 'hashpwd', 'email@mail.ru');

    expect(mockCreate).toHaveBeenCalled();
  });

  test('should return exception', async () => {
    const mockGet = jest.spyOn(repository, 'getUserByEmailDB');
    const mockHash = jest.spyOn(bcrypt, 'hash');
    const mockCreate = jest.spyOn(repository, 'createUserDB');

    mockGet.mockResolvedValue([{ name: 'name', surname: 'surname', pwd: 'hashpwd', email: 'email@mail.ru' }]);
    try {
      await createUser('name', 'surname', 'hashpwd', 'email@mail.ru');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.REG_USER_SAME_LOGIN.message);
    }
  });
});

describe('doAuthorisation function', () => {
  test('should return succes', async () => {
    const mockGet = jest.spyOn(repository, 'getUserByEmailDB');
    const mockCompare = jest.spyOn(bcrypt, 'compare');

    mockGet.mockResolvedValue([{ name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru' }]);
    mockCompare.mockResolvedValue(true);

    await doAuthorisation('hashpwd', 'email@mail.ru');

    expect(mockGet).toBeCalled();
  });

  test('should return exception', async () => {
    const mockGet = jest.spyOn(repository, 'getUserByEmailDB');
    const mockCompare = jest.spyOn(bcrypt, 'compare');

    mockGet.mockResolvedValue([]);
    mockCompare.mockResolvedValue(true);

    try {
      await doAuthorisation('hashpwd', 'email@mail.ru');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.AUTH_USER_WITH_EMAIL.message);
    }
  });

  test('should return exception', async () => {
    const mockGet = jest.spyOn(repository, 'getUserByEmailDB');
    const mockCompare = jest.spyOn(bcrypt, 'compare');

    mockGet.mockResolvedValue([{ name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru' }]);
    mockCompare.mockResolvedValue(false);

    try {
      await doAuthorisation('hashpwd', 'email@mail.ru');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.AUTH_USER_WITH_PWD.message);
    }
  });
});
