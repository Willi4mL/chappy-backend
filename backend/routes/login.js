import express from 'express'
import jwt from 'jsonwebtoken'
import { getDb } from '../data/database.js'
import { secretName } from '../server.js'

const router = express.Router()
const db = getDb()

router.post('/', async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    res.sendStatus(400)
    return
  }

  const { username, password } = req.body

  // Looking for matching username and password
  await db.read()
  const user = db.data.users.find(
    (user) => user.username === username && user.password === password
  )

  if (!user) {
    console.log('Invalid login credentials')
    res.sendStatus(401)
    return
  }

  // Display user id, username and expire
  const time = 60 * 60
  const payload = { userId: user.id, username: user.username }
  const options = { expiresIn: 2 * time }
  const token = jwt.sign(payload, secretName(), options)
  console.log('Signed jwt: ', token)
  let tokenPackage = { token: token }

  res.send(tokenPackage)


  // GET secret data
  router.get('/', (req, res) => {
    let authHeader = req.headers.authorization
    if (!authHeader) {
      res.status(401).send({
        message: 'You must be authenticated to view this very secret data.'
      })
    }

    let token = authHeader.replace('Bearer: ', '')

    try {
      let decoded = jwt.verify(token, secretName())
      console.log('GET /secret decoded: ', decoded)
      let userId = decoded.userId
      let user = db.data.users.find(u => u.id === userId)
      console.log(`User "${user.username}" has access to secret data.`)

      return res.send({
        message: 'This is secret data. Because you are authenticated.'
      })

    } catch (error) {
      console.log('GET /secret error: ' + error.message)
      res.sendStatus(401)
    }
  })
})

export default router