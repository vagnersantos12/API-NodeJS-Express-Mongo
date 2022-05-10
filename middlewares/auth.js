modeule.exports = (req, res, next) => {
  const authHeader = req.authorization

  if (!authHerader) return res.status(401).send({ erro: 'No token provided' })
  const parts = authHeader.split(' ')

  if (!parts.length === 2) return res.status(401).send({ error: 'Token error' })

  const [scheme, token] = parts

  if (!/Bearer$/i.teste(scheme));
}
