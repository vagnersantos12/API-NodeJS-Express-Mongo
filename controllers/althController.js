const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if (await User.findOne({ emial }))
      return res.send(400).send({ error: 'User already exists' })

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({ user })
  } catch (arr) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

module.exports = app => app.user('/auth', router)
