/* eslint-disable consistent-return */
import pool from './db';

const tableQuery = async () => {
  try {
    const dropUserTable = await pool.query('DROP TABLE IF EXISTS users CASCADE;');
    const dropBookingTable = await pool.query('DROP TABLE IF EXISTS bookings CASCADE;');
    const dropAgentTable = await pool.query('DROP TABLE IF EXISTS agents CASCADE;');
    const dropRoleTable = await pool.query('DROP TABLE IF EXISTS roles CASCADE;');

    const userTable = await pool.query(`CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(50) UNIQUE NOT NULL,
      created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    const roleTable = await pool.query(`CREATE TABLE IF NOT EXISTS roles(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    const agentTable = await pool.query(`CREATE TABLE IF NOT EXISTS agents(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(50) UNIQUE NOT NULL,
      role_id INTEGER NOT NULL,
      FOREIGN KEY (role_id) REFERENCES roles(id),
      created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    const bookingTable = await pool.query(`CREATE TABLE IF NOT EXISTS bookings(
      id SERIAL PRIMARY KEY,
      start_at DATE NOT NULL,
      finish_at DATE NOT NULL,
      user_id INTEGER NOT NULL,
      booked_by INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (booked_by) REFERENCES agents(id),
      created_at DATE DEFAULT CURRENT_TIMESTAMP )`);
      
        
      const usersValues = ['Julius Ngwu', 'j@gmail.com'];
      const usersQuery = await pool.query('INSERT into users(name, email)VALUES($1,$2)', usersValues);

      const roleValues = ['Admin'];
      const roleQuery = await pool.query('INSERT into roles(name)VALUES($1)', roleValues);

      const agentValues = ['John Doe', 'doe@gmail.com', 1];
      const agentQuery = await pool.query('INSERT into agents(name, email, role_id)VALUES($1,$2, $3)', agentValues);

      const bookingValues = ['2021-06-10 ', '2021-06-13 ', 1, 1];
      const bookingQuery = await pool.query('INSERT into bookings(start_at, finish_at, user_id, booked_by)VALUES($1, $2, $3, $4)', bookingValues);

    console.log('All Tables Created Successfully');
  } catch (err) {
    console.log(err.stack);
    return err.stack;
  }
};

tableQuery();