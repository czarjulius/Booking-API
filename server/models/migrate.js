import pool from './db';

const tableQuery = async () => {
  try {
    await pool.query('DROP TABLE IF EXISTS users CASCADE;');
    await pool.query('DROP TABLE IF EXISTS bookings CASCADE;');
    await pool.query('DROP TABLE IF EXISTS agents CASCADE;');
    await pool.query('DROP TABLE IF EXISTS roles CASCADE;');

    await pool.query(`CREATE TABLE IF NOT EXISTS roles(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS agents(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(50) UNIQUE NOT NULL,
      role_id INTEGER NOT NULL,
      FOREIGN KEY (role_id) REFERENCES roles(id),
      created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50) UNIQUE NOT NULL,
        agentId INTEGER NOT NULL,
        FOREIGN KEY (agentId) REFERENCES agents(id),
        created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        startAt DATE NOT NULL,
        finishAt DATE NOT NULL,
        userId INTEGER NOT NULL,
        bookedBy INTEGER NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (bookedBy) REFERENCES agents(id),
        created_at DATE DEFAULT CURRENT_TIMESTAMP )`);

    const roleValues1 = ['Admin'];
    await pool.query('INSERT into roles(name)VALUES($1)', roleValues1);
    const roleValues2 = ['Regular'];
    await pool.query('INSERT into roles(name)VALUES($1)', roleValues2);

    const agentValues1 = ['John Doe', 'doe@gmail.com', 1];
    await pool.query(
      'INSERT into agents(name, email, role_id)VALUES($1,$2, $3)',
      agentValues1
    );
    const agentValues2 = ['Simon Zain', 's@gmail.com', 2];
    await pool.query(
      'INSERT into agents(name, email, role_id)VALUES($1,$2, $3)',
      agentValues2
    );

    const usersValues1 = ['Julius Ngwu', 'j@gmail.com', 1];
    await pool.query(
      'INSERT into users(name, email, agentId)VALUES($1,$2,$3)',
      usersValues1
    );
    const usersValues2 = ['Micheal Dake', 'm@gmail.com', 2];
    await pool.query(
      'INSERT into users(name, email, agentId)VALUES($1,$2,$3)',
      usersValues2
    );
    const usersValue3 = ['Wisdom Brawn', 'w@gmail.com', 1];
    await pool.query(
      'INSERT into users(name, email, agentId)VALUES($1,$2,$3)',
      usersValue3
    );

    const bookingValues = ['2021-06-10', '2021-06-13', 1, 1];
    await pool.query(
      `INSERT into bookings(startAt, finishAt, userId, bookedBy)
      VALUES($1, $2, $3, $4)`,
      bookingValues
    );

    console.log('All Tables Created Successfully');
  } catch (err) {
    console.log(err.stack);
    return err.stack;
  }
};

tableQuery();
