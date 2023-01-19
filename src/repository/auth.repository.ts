import { pool } from '../db';
import { iUser } from '../interfaces/interfaces';

async function getUserByEmailDB(email: string): Promise<iUser[]> {
  const client = await pool.connect();
  const sql = 'SELECT * from users WHERE email=$1';
  const data = (await client.query(sql, [email])).rows;
  return data;
}

async function createUserDB(name: string, surname: string, pwd: string, email: string): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'INSERT INTO users(name, surname, pwd, email) VALUES ($1, $2, $3, $4)';
    await client.query(sql, [name, surname, pwd, email]);

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(error);
  }
}

export { getUserByEmailDB, createUserDB };
