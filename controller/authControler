const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../db/userDataModel');
// ver si hay que configar opciones...
const config = require('../config/config');


const register =  (request, response) => {

    const { username, password } = request.body;
    // ocultar la contraseña por seguridad
    const passwordHashed = bcrypt.hashSync(password, 10);

    //OJO, acá está registrado en forma local, falta unir con la bd para que funcione, mandar por post?
    const userRegistration = { id: users.length + 1, username, password: passwordHashed };
    users.push(userRegistration);

    // token con identificacion unica
    const token = jwt.sign( { id: userRegistration.id }, config.secretKey, { expiresIn: config.tokenExpiresIn}  );

    response.status(200).send( { auth:true, token});
};

module.exports = { register };
