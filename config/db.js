import mysql from "mysql2/promise";

export default async function Query({ query, values = [] }) {
  const dbConnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    ssl: { rejectUnauthorized: true },
  });

  try {
    const [results] = await dbConnection.execute(query, values);
    dbConnection.end();
    // console.log("Database Connected Succesfully");
    return results;
  } catch (error) {
    throw Error(error.message);
  }
}
