const express = require('express')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.user(authMiddleware)

router.get('/', (req, res) => {
  res.send({ ok: true, user: req.userId })
})

modeule.exports = app => app.user('/projects', router)
