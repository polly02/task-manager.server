const { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB } = require("../repository/user.repository")
const ExceptionType = require("../helper/exceptions.type")

async function getUsers() {
    const user = await getUsersDB()
    if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_GET)
    return user
}

async function getUserById(id) {
    const user = await getUserByIdDB(id)
    if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_GET_BY_ID)
    return user
}

async function updateUser(id, name, surname, pwd, email, status) {
    const user = await updateUserDB(id, name, surname, pwd, email, status)
    if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_PUT)
    return user
}

async function deleteUser(id) {
    const user = await deleteUserDB(id)
    if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_DELETE)
    return user
}

async function patchUser(id, dataFromClient) {
    const user = await patchUserDB(id, dataFromClient)
    if (!user.length) throw new Error(ExceptionType.USER_NOT_FOUND_PATCH)
    return user
}

module.exports = { getUsers, getUserById, updateUser, deleteUser, patchUser }