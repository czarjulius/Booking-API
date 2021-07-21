import { Pool } from 'pg';
import { dbEnv } from '../envs';
import AppError from './error';

const pool = new Pool({
  connectionString: dbEnv.DATABASE_URL,
  ssl: false
});

const runQuery = async (query) => {
  try {
    await pool.connect();
    const result = await pool.query(query);
    return result;
  } catch (err) {
    console.log('err', err);
    throw new AppError({
      code: 500,
      message: 'Something went wrong. It is not you, it is us'
    });
  }
};

runQuery('SELECT 1').then(() => {
  console.log('Connected to MSSQL Database');
});

export default runQuery;
