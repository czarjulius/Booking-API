import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.LOCALDB_URL,
  ssl: false
});

export default pool;
