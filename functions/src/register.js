const functions = require("firebase-functions");
const { error } = require("firebase-functions/logger");
const {auth} = require('../admin')
/**
 * endpoint needs to recieve valid email and password
 */
exports.register = functions.https.onCall( async(request, response)  => {
    await auth.createUser({
        email: request.body.email,
        password: request.body.password

    })
    .catch((error) =>{
        console.log(error)
       return response.send('err during user creation')
    })
    return response.send('user created')

});



  