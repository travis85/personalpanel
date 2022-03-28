const functions = require("firebase-functions");
const { error } = require("firebase-functions/logger");
const {auth} = require('./admin')
/**
 * endpoint needs to recieve valid email and password
 */
exports.register = functions.https.onCall((data, context)  => {
    auth.createUser({
        email: data.email,
        password: data.password

    })
    .then((resp) =>{
        return 'user created'

    })
    .catch((error) =>{
        console.log(error)
        return 'err during user creation'
    })

});



  

