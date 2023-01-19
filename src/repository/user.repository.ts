import { pool } from '../db';
import { iUser } from '../interfaces/interfaces';

async function getUsersDB(): Promise<iUser[]> {
  const client = await pool.connect();
  const sql = 'SELECT * FROM users';
  const data = (await client.query(sql)).rows;
  return data;
}

async function getUserByIdDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();
  const sql = 'SELECT * FROM users WHERE id=$1';
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function updateUserDB(id: number, name: string, surname: string, pwd: string, email: string, status: number): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE users SET name=$1, surname=$2, pwd=$3, email=$4, status=$5 WHERE id=$6 RETURNING *';
    const data = (await client.query(sql, [name, surname, pwd, email, status, id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(error);
    return [];
  }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE users SET status = 1 WHERE id=$1 RETURNING *';
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(error);
    return [];
  }
}

async function patchUserDB(id: number, dataFromClient: iUser): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'SELECT * FROM users  WHERE id = $1';
    const data = (await client.query(sql, [id])).rows[0];

    const mergeData = { ...data, ...dataFromClient };

    const sql2 = 'UPDATE users SET name=$1, surname=$2, pwd=$3, email=$4, status=$5 WHERE id=$6';
    await client.query(sql2, [mergeData.name, mergeData.surname, mergeData.pwd, mergeData.email, mergeData.status, id]);

    const sql3 = 'SELECT * FROM users WHERE id = $1';
    const data3 = (await client.query(sql3, [id])).rows;

    await client.query('COMMIT');

    return data3;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`patchUser: ${error}`);
    return [];
  }
}

export { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB };
