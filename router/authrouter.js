import { Router } from "express";
import { AuthController } from "../controllers/authcontroller.js";
import { isAuth } from "../middlewares/is_auth.js";
import { rateLimit } from "express-rate-limit"

const authRoutes = Router();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: {
        success: false,
        data: null,
        message: 'Numero de intentos excedido, intente mas tarde',
        error: null
    }
    //store: ..., //Redis, Memcached, etc.
})
authRoutes.post('/login', limiter, AuthController.login)
authRoutes.post('/set-password', isAuth, AuthController.setPassword)

export default authRoutes;