const passport = require('passport')
const User = require('../models/User')

module.exports = {
    getLogin: (req, res, next) => {
        if (req.user) {
            return res.redirect('/todos')
        }
        res.render('login', {
            title: 'Login'
        })
    }
}


