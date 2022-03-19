import mysql from 'mysql2/promise';

let pool: any = null;

export type Result = [any, null];

export type Connection = {
  commit: () => Promise<void>;
  release: () => Promise<void>;
  rollback: () => Promise<void>;
  beginTransaction: () => Promise<void>;
  query: (query: string, ...args: any[]) => Promise<Result>;
};

async function getPool() {
  if (!pool) {
    pool = mysql.createPool(await getSettings());
  }

  return pool;
}

export default {
  async getConnection(): Promise<Connection> {
    return (await getPool()).getConnection();
  },

  async query(query: string, ...args: any[]): Promise<Result> {
    return (await getPool()).query(query, ...args);
  },
};

async function getSettings() {
  let settings: any = {};

  settings = {
    user: process.env.MYSQL_USER_HEROKU,
    password: process.env.MYSQL_PASSWORD_HEROKU,
    database: process.env.MYSQL_DATABASE_HEROKU,
    host: process.env.MYSQL_HOST_HEROKU,
  };

  return settings;
}
