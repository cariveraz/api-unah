import express, { json } from 'express' // "importando la instancia de express"
import userRoutes from './router/usersrouter.js'
import authRoutes from './router/authrouter.js'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import xss from 'xss-clean'


// createServer
const app = express() // "creando la instancia de express"

dotenv.config()

app.disable('x-powered-by') // "desactivando la cabecera x-powered-by"

// ! Middlewares

app.use(helmet())
app.use(xss())
// me permite recibir datos en formato json en el body de la solicitud
app.use(json())
app.use(cors({
    // origin: 'http://localhost:55138'
    // origin: [
    //     'http://localhost:55138', 
    //     'http://midominio.com', 
    //     'http://dev.midominio.com',
    //     ],
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})) // <- Habilita todos los origenes de peticiones

//Rutas
app.use(authRoutes)
app.use(userRoutes) // la adicion de las rutas de el recurso de Usuarios

// La creacion de las rutas de mi aplicación
app.get('/', (req, res) => {
    res.status(404).json({
        message: 'Not found'
    })

})

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Recurso no encontrado'
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})
