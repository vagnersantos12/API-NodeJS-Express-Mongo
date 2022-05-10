const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send({ ok: true })
})

modeule.exports = app => app.user('/projects', router)
