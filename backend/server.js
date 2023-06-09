import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import userRouter from './routes/user.js'
import messageRouter from './routes/messages/messages.js'
import channelRouter from './routes/channels.js'
import homeRouter from './routes/home.js'
import channelMemeberRouter from './routes/channelsMember.js'
import messageMemberOneRouter from './routes/messages/messageMemberOne.js'
import messageRandomRaouter from './routes/messages/messagesRandom.js'
import messageMemberTwoRouter from './routes/messages/messagesMemberTwo.js'
import messageMemberThreeRouter from './routes/messages/messageMemberThree.js'
import loginRouter from './routes/login.js'

const port = process.env.PORT || 1414
const app = express()

// JWT
export const secretName = () => {
    const seceret = process.env.SECRET || 'qwerty'
    return seceret
}

app.use(cors())
app.use('/api', express.json()) 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next()
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const pathToStaticFolder = join(__dirname, '../dist')
app.use(express.static(pathToStaticFolder))

app.use('/api/home', homeRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/channels', channelRouter)
app.use('/api/channelsmember', channelMemeberRouter)
app.use('/api/messages', messageRouter)
app.use('/api/messagesrandom', messageRandomRaouter)
app.use('/api/messagesmemberone', messageMemberOneRouter)
app.use('/api/messagesmembertwo', messageMemberTwoRouter)
app.use('/api/messagesmemberthree', messageMemberThreeRouter)

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})