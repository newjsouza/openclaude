import pg from 'pg';
const { Pool } = pg;
let pool = null;
export function getPool() {
  if (!pool) {
    pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || 'techhub',
      user: process.env.DB_USER || 'techhub',
      password: process.env.DB_PASSWORD || 'techhub123',
      max: 20, idleTimeoutMillis: 30000, connectionTimeoutMillis: 2000,
    });
  }
  return pool;
}
export async function query(sql, params = []) {
  const client = await getPool().connect();
  try { return await client.query(sql, params); }
  finally { client.release(); }
}