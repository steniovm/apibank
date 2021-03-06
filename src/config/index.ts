import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  SERVER_PORT: parseInt(String(process.env.SERVER_PORT), 10) || 7070,
  DB_NAME: process.env.DB_NAM || 'user',
  DB_PORT: parseInt(String(process.env.DB_PORT), 10),
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
};

export { config };
