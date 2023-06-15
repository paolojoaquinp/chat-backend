const Mensaje = require('../models/mensaje');

const obtenerChat = async( req, res ) => {
    res.setHeader('Content-Type', 'application/json');

    const miId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await Mensaje.find({
        $or: [
            { de: miId, para: mensajesDe },
            { de: mensajesDe, para: miId },
        ]
    })
    .sort({ createdAt: 'asc' })
    .limit(30);



    res.json({
        ok: true,
        mensajes: last30
    });


}

module.exports = {
    obtenerChat
}