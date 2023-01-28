import bcrypt from 'bcrypt';
import ExceptionType from '../helper/exceptions.type';
import { createUserDB, getUserByEmailDB } from '../repository/auth.repository';

const saltround = 10;

async function createUser(name: string, surname: string, pwd: string, email: string): Promise<void> {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error(ExceptionType.REG_USER_SAME_LOGIN.message);

  const hashedPwd = await bcrypt.hash(pwd, saltround);
  console.log(hashedPwd);
  await createUserDB(name, surname, hashedPwd, email);
}

async function doAuthorisation(pwd: string, email: string): Promise<void> {
  const foundUser = await getUserByEmailDB(email);
  if (!foundUser.length) throw new Error(ExceptionType.AUTH_USER_WITH_EMAIL.message);

  const hashedPwd = foundUser[0].pwd;

  if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error(ExceptionType.AUTH_USER_WITH_PWD.message);
}

export { createUser, doAuthorisation };
