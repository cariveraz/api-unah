import jwt from 'jsonwebtoken'

export const isAuth = (req, res, next) => {
    
    const authHeader = req.headers.authorization // Bearer jbnfewkjf2uy3rlkm4fdwuhef

    if (!authHeader) {
        res.status(401).json({
            success: false,
            message: 'Debe de iniciar sesion'
        })
    }
    const token = authHeader.split(' ')[1]


    //validar si es un token valido
    try {
        const { role } = jwt.verify(token, process.env.SECRET_KEY);

        req.params.role = role
        next()
    } catch(err) {
            res.status(401).json({
                success: false,
                message: err.message
            })
    }  
    
}