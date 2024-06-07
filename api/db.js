import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "cyc123456",
  database: "blog",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
