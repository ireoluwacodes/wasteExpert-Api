const login = require('./login');
const forgotPassword = require('./forgotPassword');
const register = require('./register');
const inquiry = require('./inquiry');
const resetPassword = require('./resetPassword');
const subscribe = require("./subscribe")
const confirmUser = require("./confirmUser")
const verifyUser = require("./verifyUser")

module.exports = {
    paths:{
        '/register':{
            ...register,
        },
        '/verify-user/{id}':{
            ...verifyUser,
        },
        '/login':{
            ...login,
           
        },
        '/forgot-password':{
            ...forgotPassword,
        },
        '/confirm-user/{id}':{
            ...confirmUser,
        },
        '/reset-password':{
            ...resetPassword,
        },
        '/inquire':{
            ...inquiry,
        },
        '/subscribe':{
            ...subscribe,
        },
    }
}