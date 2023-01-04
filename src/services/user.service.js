const { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } = require("../repository/user.repository")

async function getUsers() {
    const user = await getUsersDB()
    if (!user.length) throw new Error("not found")
    return user
}

async function getUserById(id) {
    const user = await getUserByIdDB(id)
    if (!user.length) throw new Error("not found")
    return user
}

async function updateUser(id, name, surname, pwd, email, status){
    const user = await updateUserDB(id, name, surname, pwd, email, status)
    if (!user.length) throw new Error("not found")
    return user
}

async function deleteUser(id){
    const user = await deleteUserDB(id)
    if (!user.length) throw new Error("not found")
    return user
}

module.exports = { getUsers, getUserById, updateUser, deleteUser }