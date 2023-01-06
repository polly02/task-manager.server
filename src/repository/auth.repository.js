const { pool } = require("../db")

async function getUserByEmailDB(email) {
    const client = await pool.connect()
    const sql = "SELECT * from users WHERE email=$1"
    const data = (await client.query(sql, [email])).rows
    return data
}

async function createUserDB(name, surname, pwd, email) {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")

        const sql = "INSERT INTO users(name, surname, pwd, emai) VALUES ($1, $2, $3, $4)"
        await client.query(sql, [name, surname, pwd, email])

        await client.query("COMMIT")

        return data
    } catch (error) {
        await client.query("ROLLBACK")
        console.log(error.message)
        return []
    }
}

async function checkUserByPwdDB(pwd) {
    const client = await pool.connect()
    const sql = "SELECT * FROM users WHERE pwd=$1"
    const data = (await client.query(sql, [pwd])).rows
    return data
}

module.exports = { getUserByEmailDB, createUserDB, checkUserByPwdDB }