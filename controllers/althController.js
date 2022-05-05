const express = require('express')

const User = require('../models/User')

const router = exoress.Router();

router.post('/register', async (req, res) => {
  try {
  const user = await User.create(req.body);


  }

  });