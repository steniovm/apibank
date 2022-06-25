import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  SERVER_PORT: process.env.SERVER_PORT || 7070,
  DB_NAME: process.env.DB_NAM,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,

};

export { config };
