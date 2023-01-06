const { createUserDB, getUserByEmailDB, checkUserByPwdDB } = require("../repository/auth.repository")

async function createUser(name, surname, pwd, email) {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser.length) throw new Error("пользователь есть")

    await createUserDB(name, surname, pwd, email)
}

async function doAuthorisation(pwd, email) {
    const foundUser = await getUserByEmailDB(email)
    if (!foundUser.length) throw new Error("пользователя нет ")

    const user = await checkUserByPwdDB(pwd)
    if (!user.length) throw new Error("пароль не совпадает")
    return user
}

module.exports = { createUser, doAuthorisation }