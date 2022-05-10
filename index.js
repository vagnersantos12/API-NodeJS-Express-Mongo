const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('OK')
})

require('./controllers/authController')(app)
require('./cotrollers/projectController')(app)
//app do express objeto definido uma vez para todos os arquivos para não duas aplicações rodando no node.js!

app.listen(3000)
