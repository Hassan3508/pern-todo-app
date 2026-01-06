import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5433, // use 5432 if needed
  database: "tododb",
});

export default pool;
