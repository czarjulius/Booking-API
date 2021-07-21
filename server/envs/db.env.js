import 'dotenv/config';

const environment = {
  development: {
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST,
    DATABASE_USER: process.env.DEV_DATABASE_USER,
    DATABASE_PASSWORD: process.env.DEV_DATABASE_PASSWORD,
    DATABASE_SERVER: process.env.DEV_DATABASE_SERVER,
    DATABASE: process.env.DEV_DATABASE,
    DATABASE_PORT: process.env.DEV_DATABASE_PORT,
    DATABASE_URL: process.env.DEV_DATABASE_URL
  },
  test: {
    APP_PORT: process.env.TEST_APP_PORT,
    APP_HOST: process.env.APP_HOST,
    DATABASE_USER: process.env.TEST_DATABASE_USER,
    DATABASE_PASSWORD: process.env.TEST_DATABASE_PASSWORD,
    DATABASE_SERVER: process.env.TEST_DATABASE_SERVER,
    DATABASE: process.env.TEST_DATABASE,
    DATABASE_PORT: process.env.TEST_DATABASE_PORT,
    DATABASE_URL: process.env.TEST_DATABASE_URL
  },
  production: {
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST,
    DATABASE_USER: process.env.PROD_DATABASE_USER,
    DATABASE_PASSWORD: process.env.PROD_DATABASE_PASSWORD,
    DATABASE_SERVER: process.env.PROD_DATABASE_SERVER,
    DATABASE: process.env.PROD_DATABASE,
    DATABASE_PORT: process.env.PROD_DATABASE_PORT,
    DATABASE_URL: process.env.PROD_DATABASE_URL
  }
};

export default environment[process.env.NODE_ENV || 'development'];
