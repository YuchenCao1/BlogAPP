import mysql from "mysql";
export const db = mysql.createConnection({
  host: "local",
  user: "root",
  password: "cyc123456",
  database: "blog",
});
