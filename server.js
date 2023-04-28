const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const PORT = process.env.PORT || 2121

const connectDB = require('./config/database')
require('dotenv').config({ path: './config/.env'})
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(logger('dev'))
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl:process.env.DB_URI }),
    })
  )

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})