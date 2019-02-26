const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const app = express()

//引入routes
const users = require('./routes/api/users')         //引入users.js
const profiles = require('./routes/api/profiles')         //引入profiles.js

//DB config
const db = require('./config/keys').mongoURI

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//passport初始化
app.use(passport.initialize())
//配置passport
require('./config/passport')(passport)

//Connect to mongodb
mongoose.connect(db, {useNewUrlParser:true})
        .then(() => console.log('MongoDB is Connected'))
        .catch(err => console.log(err))

app.get('/test', (req, res) => {
    res.send('Hello World')
})


//使用routes
app.use('/api/users', users)
app.use('/api/profiles', profiles)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running by port ${port}`)
})