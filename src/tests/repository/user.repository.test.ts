import { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB } from '../../repository/user.repository';

const mClient = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const mPool = {
    connect: jest.fn(() => mClient),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('getUsersDB', () => {
  test('should return succes', async () => {
    const mockUsers = [{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }];

    mClient.query.mockResolvedValue({ rows: mockUsers });
    const expected = await getUsersDB();

    expect(expected).toEqual(mockUsers);
  });
});

describe('getUserByIdDB', () => {
  test('should return succes', async () => {
    const mockUsers = [{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }];

    mClient.query.mockResolvedValue({ rows: mockUsers });
    const expected = await getUserByIdDB(1);

    expect(expected).toEqual(mockUsers);
  });
});

describe('updateUserDB', () => {
  test('should return succes', async () => {
    const mockUsers = [{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }];

    mClient.query.mockResolvedValue({ rows: mockUsers });
    const expected = await updateUserDB(1, 'name', 'surname', 'pwd12345', 'email@mail.ru', 1);

    expect(mClient.query).toBeCalledWith('COMMIT');
    expect(expected).toEqual(mockUsers);
  });
});

describe('deleteUserDB', () => {
  test('should return succes', async () => {
    const mockUsers = [{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }];

    mClient.query.mockResolvedValue({ rows: mockUsers });
    const expected = await deleteUserDB(1);

    expect(mClient.query).toBeCalledWith('COMMIT');
    expect(expected).toEqual(mockUsers);
  });
});

describe('patchUserDB', () => {
  test('should return succes', async () => {
    const mockUsers = [{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }];

    mClient.query.mockResolvedValue({ rows: mockUsers });
    const expected = await patchUserDB(1, { name: 'name' });

    expect(mClient.query).toBeCalledWith('COMMIT');
    expect(expected).toEqual(mockUsers);
  });
});
