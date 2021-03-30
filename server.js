const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')

const AccountRouter = require('./routes/account')
const QuestionRouter = require('./routes/api')

const app = express()
const MONGO_URI = 'mongodb://localhost:27017/HW6'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const errorHandle = (err, req, res, next) => {
  res.status(500).send(err.toString())
}

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
}))

app.use(express.json())

app.use('/account', AccountRouter)
app.use('/api', QuestionRouter)

app.use(errorHandle)
app.listen(3000, () => {
  console.log('listening on 3000')
})
