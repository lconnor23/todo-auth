const express = require('express')
const passport = require('passport')
const router = express.Router()
const authController = require('../controllers/auth')
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')

router.get('/', homeController.getLogin)
router.get('/signup', homeController.getSignUp)
router.post('/signup', homeController.postSignUp)
router.get('/todos', homeController.getTodos)

module.exports = router