const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jasonwebtoken')

const authConfig = require('../config/auth')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if (await User.findOne({ email }))
      return res.send(400).send({ error: 'User already exists' })

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({ user })
  } catch (arr) {
    return res
      .status(400)
      .send({ error: 'Registration failed' })
      .select('+password')
    if (!user) return res.status(400).send({ error: 'User not found' })
  }
})

router.post('/authenticate', async (req, res) => {
  const user = await User.findOne({ email }).select('+password')

  if (!user) return res.status(400).send({ error: 'User not found' })

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Ivalid password' })

  user.password = undefined

  const token = jwt.sign({ id: user.id }, authConfig.secret, {
    expiresIn: 86400
  })

  res.send({ user, token })
})

module.exports = app => app.user('/auth', router)
