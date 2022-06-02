require('dotenv').config();
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: {
        rejectUnauthorized: false,
    }
};

const db = pgp(cn);

try {
    db.connect();
    console.log("DB Connected")
} catch (error) {
    console.error(error);
}

module.exports = db;