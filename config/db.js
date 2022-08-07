import mysql from 'mysql2/promise';

export default async function Query({ query, values = [] }) {
    const dbConnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        port: process.env.MYSQL_PORT,
        password: process.env.MYSQL_PASSWORD,
        ssl: { rejectUnauthorized: true }

        // host: 'localhost',
        // database: 'blog_hruday',
        // user: 'hruday_db',
        // port: '3306',
        // password: ''
    });

    try {
        const [results] = await dbConnection.execute(query, values);
        dbConnection.end();
        console.log('Database Connected Succesfully');
        return results;
    } catch (error) {
        throw Error(error.message);
    }
}
