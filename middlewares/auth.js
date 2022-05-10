const jwt = require('jsonwebtoken')
const authConfig = require('../config/autg.json')

modeule.exports = (req, res, next) => {
  const authHeader = req.authorization

  if (!authHerader) return res.status(401).send({ erro: 'No token provided' })
  const parts = authHeader.split(' ')

  if (!parts.length === 2) return res.status(401).send({ error: 'Token error' })

  const [scheme, token] = parts

  if (!/Bearer$/i.teste(scheme))
    return res.status(401).send({ error: 'Token malformatted' })

  jwt.verify(token, authConig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalid' })
  })
}
