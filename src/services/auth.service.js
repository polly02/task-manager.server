const bcrypt = require('bcrypt');
const ExceptionType = require('../helper/exceptions.type');
const { createUserDB, getUserByEmailDB } = require('../repository/auth.repository');

const saltround = 10;

async function createUser(name, surname, pwd, email) {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error(ExceptionType.REG_USER_SAME_LOGIN.message);

  const hashedPwd = await bcrypt.hash(pwd, saltround);

  await createUserDB(name, surname, hashedPwd, email);
}

async function doAuthorisation(pwd, email) {
  const foundUser = await getUserByEmailDB(email);
  if (!foundUser.length) throw new Error(ExceptionType.AUTH_USER_WITH_EMAIL.message);

  const hashedPwd = foundUser[0].pwd;

  if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error(ExceptionType.AUTH_USER_WITH_PWD.message);
}

module.exports = { createUser, doAuthorisation };
