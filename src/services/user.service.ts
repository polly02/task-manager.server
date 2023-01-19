import { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB } from '../repository/user.repository';
import ExceptionType from '../helper/exceptions.type';
import { iUser } from '../interfaces/interfaces';

async function getUsers(): Promise<iUser[]> {
  const user = await getUsersDB();
  if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_GET.message);
  return user;
}

async function getUserById(id: number): Promise<iUser[]> {
  const user = await getUserByIdDB(id);
  if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_GET_BY_ID.message);
  return user;
}

async function updateUser(id: number, name: string, surname: string, pwd: string, email: string, status: number): Promise<iUser[]> {
  const user = await updateUserDB(id, name, surname, pwd, email, status);
  if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_PUT.message);
  return user;
}

async function deleteUser(id: number): Promise<iUser[]> {
  const user = await deleteUserDB(id);
  if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_DELETE.message);
  return user;
}

async function patchUser(id: number, dataFromClient: iUser): Promise<iUser[]> {
  const user = await patchUserDB(id, dataFromClient);
  if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_PATCH.message);
  return user;
}

export { getUsers, getUserById, updateUser, deleteUser, patchUser };
