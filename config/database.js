import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'

if(process.env.DB_HOST === undefined) {
    dotenv.config()
}

// disponible desde la importacion de mysql2/promise
const db = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true,
    queueLimit: 0 // sin limites de conexiones en espera 
})

export default db
