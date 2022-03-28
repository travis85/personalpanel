const { initializeApp  } = require('firebase-admin/app');
const {getAuth} = require('firebase-admin/auth')

module.exports = {
    app: initializeApp(),
    auth: getAuth()
}