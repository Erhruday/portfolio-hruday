import mysql from 'mysql2/promise';

export default async function Query({ query, values = [] }) {
    const dbConnection = await mysql.createConnection({
        host: 'odd37vxevo6h.ap-south-2.psdb.cloud',
        database: 'portfolio_hruday',
        user: 'i2m51t2alj99',
        port: '3306',
        password: 'pscale_pw_s25UJkdB7B4wYyujIU-QD91DV7eHUC3mcQhVBPon4Mk',
        ssl: {}

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
