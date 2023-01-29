import { getUsers, getUserById, updateUser, deleteUser, patchUser } from '../../services/user.service';
import * as repository from '../../repository/user.repository';
import ExceptionType from '../../helper/exceptions.type';

describe('getUsers function', () => {
  test('should return succes', async () => {
    const mock = jest.spyOn(repository, 'getUsersDB');

    mock.mockResolvedValue([{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }]);

    const result = await getUsers();

    expect(mock).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('name');
  });

  test('should return exception', async () => {
    const mock = jest.spyOn(repository, 'getUsersDB');

    mock.mockResolvedValue([]);

    try {
      await getUsers();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NOT_FOUND_GET.message);
    }
  });
});

describe('getUserById function', () => {
  test('should return succes', async () => {
    const mock = jest.spyOn(repository, 'getUserByIdDB');

    mock.mockResolvedValue([{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }]);

    const result = await getUserById(1);

    expect(mock).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('name');
    expect(result[0].surname).toBe('surname');
  });

  test('should return exception', async () => {
    const mock = jest.spyOn(repository, 'getUserByIdDB');

    mock.mockResolvedValue([]);

    try {
      await getUserById(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NOT_FOUND_GET_BY_ID.message);
    }
  });
});

describe('updateUser function', () => {
  test('should return succes', async () => {
    const mock = jest.spyOn(repository, 'updateUserDB');

    mock.mockResolvedValue([{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }]);

    const result = await updateUser(1, 'name', 'surname', 'pwd12345', 'email@mail.ru', 1);

    expect(mock).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('name');
    expect(result[0].surname).toBe('surname');
    expect(result[0].pwd).toBe('pwd12345');
    expect(result[0].email).toBe('email@mail.ru');
    expect(result[0].status).toBe(1);
  });

  test('should return exception', async () => {
    const mock = jest.spyOn(repository, 'updateUserDB');

    mock.mockResolvedValue([]);

    try {
      await updateUser(1, 'name', 'surname', 'pwd12345', 'email@mail.ru', 1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NOT_FOUND_PUT.message);
    }
  });
});

describe('deleteUser function', () => {
  test('should return succes', async () => {
    const mock = jest.spyOn(repository, 'deleteUserDB');

    mock.mockResolvedValue([{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 0 }]);

    const result = await deleteUser(1);

    expect(mock).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].status).toBe(0);
  });

  test('should return exception', async () => {
    const mock = jest.spyOn(repository, 'deleteUserDB');

    mock.mockResolvedValue([]);

    try {
      await deleteUser(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NOT_FOUND_DELETE.message);
    }
  });
});

describe('patchUser function', () => {
  test('should return succes', async () => {
    const mock = jest.spyOn(repository, 'patchUserDB');

    mock.mockResolvedValue([{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 0 }]);

    const result = await patchUser(1, { name: 'name' });

    expect(mock).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('name');
  });

  test('should return exception', async () => {
    const mock = jest.spyOn(repository, 'patchUserDB');

    mock.mockResolvedValue([]);

    try {
      await patchUser(1, { name: 'name' });
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.USER_NOT_FOUND_PATCH.message);
    }
  });
});
