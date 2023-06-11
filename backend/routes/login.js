import express from 'express'
import jwt from 'jsonwebtoken'
import { getDb } from '../data/database.js'
import { secretName } from '../server.js'

const { sign } = jwt;

const router = express.Router()
const db = getDb()

router.post('/', async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    res.sendStatus(400)
    return
  }

  const { username, password } = req.body

  await db.read();
  const user = db.data.users.find(
    (user) => user.username === username && user.password === password
  )

  if (!user) {
    console.log('Invalid login credentials')
    res.sendStatus(401)
    return
  }

  const payload = { userId: user.id }
  const token = jwt.sign(payload, secretName())

  res.send({ token })
})

export default router