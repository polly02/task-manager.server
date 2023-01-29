import { getUserByEmailDB, createUserDB } from '../../repository/auth.repository';

const mClient = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const mPool = {
    connect: jest.fn(() => mClient),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('getUserByEmailDB function', () => {
  test('should return succes', async () => {
    const mockUser = [{ id: 1, name: 'name', surname: 'surname', pwd: 'pwd12345', email: 'email@mail.ru', status: 1 }];
    mClient.query.mockResolvedValue({ rows: mockUser });
    const expected = await getUserByEmailDB('email@mail.ru');

    expect(expected).toEqual(mockUser);
  });
});

describe('createUserDB', () => {
  test('should return succes', async () => {
    mClient.query.mockResolvedValue({});

    await createUserDB('name', 'surname', 'pwd12345', 'email@mail.ru');

    expect(mClient.query).toBeCalled();
    expect(mClient.query).toBeCalledWith('COMMIT');
  });
});
