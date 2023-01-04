const { pool } = require("../db")

async function getUsersDB() {
    const client = await pool.connect()
    const sql = "SELECT * FROM users"
    const data = (await client.query(sql)).rows
    return data
}

async function getUserByIdDB(id) {
    const client = await pool.connect()
    const sql = "SELECT * FROM users WHERE id=$1"
    const data = (await client.query(sql, [id])).rows
    return data
}

async function updateUserDB(id, name, surname, pwd, email, status) {
    const client = await pool.connect()
    try {
        client.query("BEGIN")
        const sql = "UPDATE users SET name=$1, surname=$2, pwd=$3, email=$4, status=$5 WHERE id=$6 RETURNING *"
        const data = (await client.query(sql, [name, surname, pwd, email, status, id])).rows
        client.query("COMMIT")
        return data
    } catch (error) {
        client.query("ROLLBACK")
        console.log(error.message)
        return []
    }
}

async function deleteUserDB(id) {
    const client = await pool.connect()
    try {
        client.query("BEGIN")
        const sql = "DELETE FROM users WHERE id=$1 RETURNING *"
        const data = (await client.query(sql, [id])).rows
        client.query("COMMIT")
        return data
    } catch (error) {
        client.query("ROLLBACK")
        console.log(error.message)
        return []
    }
}

async function patchUserDB(id, dataFromClient) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')

        const sql = "SELECT * FROM users  WHERE id = $1"
        const data = (await client.query(sql, [id])).rows[0]

        const mergeData = { ...data, ...dataFromClient }

        const sql2 = "UPDATE users SET name=$1, surname=$2, pwd=$3, email=$4, status=$5 WHERE id=$6"
        await client.query(sql2, [mergeData.name, mergeData.surname, mergeData.pwd, mergeData.email, mergeData.status, id])

        const sql3 = "SELECT * FROM users WHERE id = $1"
        const data3 = (await client.query(sql3, [id])).rows

        await client.query('COMMIT')

        return data3
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`patchUser: ${error.message}`)
        return []
    }
}

module.exports = { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB }