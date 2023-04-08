const User = require('../models/User')
module.exports = {
    getLogin: (req, res) => {
        res.render('login.ejs')
    },
    getSignUp: (req, res) => {
        if(req.user){
            return res.redirect('/todos')
        }
        res.render('signup.ejs')
    },
    postSignUp: (req, res, next) => {
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect('/todos')
    },
    getTodos: (req, res) => {
        res.render('todos.ejs')
    }
}