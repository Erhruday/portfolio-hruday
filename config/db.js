import mysql from 'mysql2/promise';

export default async function Query({ query, values = [] }) {
    const dbConnection = await mysql.createConnection({
        host: 'ap-south.connect.psdb.cloud',
        database: 'blogs_hruday',
        user: '1otke5nl33avhek7eeve',
        port: '3306',
        password: 'pscale_pw_tqmJA7l3VEDHIDlwMBhlDQRSXein2p9DFlM1PQN0TMb',
        ssl: { rejectUnauthorized: true }
    });
    console.log('Hello %%%%%%%%%%%%%%%%%%');

    try {
        const [results] = await dbConnection.execute(query, values);
        dbConnection.end();
        console.log('Database Connected Succesfully');
        return results;
    } catch (error) {
        throw Error(error.message);
    }
}
