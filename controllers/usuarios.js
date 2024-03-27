const { response } = require('express');

const getUsuarios = async (req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getUsuarios',
        usuarios: []
    });
}

module.exports = {
    getUsuarios
}

