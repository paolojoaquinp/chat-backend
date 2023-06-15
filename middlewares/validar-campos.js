const { validationResult } = require('express-validator');


const validarCampos = (req, res, next ) => {
    res.setHeader('Content-Type', 'application/json');

    const errores = validationResult( req );

    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();

}




module.exports = {
    validarCampos
}