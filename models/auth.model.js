// filepath: c:\Users\cariv\Documents\DisenioDigital\server-express\models\auth.model.js
// import dotenv from 'dotenv';
// import { pool } from '../db.js'; // Assuming you have a db.js file that exports a pool instance for database connection

// dotenv.config();

// export async function validateUser(req, res, next) {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "Faltan datos" });
//     }

//     if (!email.includes('@')) {
//         return res.status(400).json({ error: "Email invalido" });
//     }

//     try {
//         const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
//         const user = rows[0];

//         if (!user) {
//             return res.status(404).json({ error: "Usuario no encontrado" });
//         }

//         if (user.password !== password) {
//             return res.status(401).json({ error: "Contraseña incorrecta" });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(500).json({ error: "Error del servidor" });
//     }
// }
