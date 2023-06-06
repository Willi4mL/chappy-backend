import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import userRouter from './routes/user.js'
import messageRouter from './routes/messages.js'
import channelRouter from './routes/channels.js'
import homeRouter from './routes/home.js'

const port = process.env.PORT || 1414
const app = express()

app.use(cors())
app.use('/api', express.json())  // gör så att vi kan använda req.body
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next()
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const pathToStaticFolder = join(__dirname, '../dist')
app.use(express.static(pathToStaticFolder))

app.use('/api/home', homeRouter)
app.use('/api/users', userRouter)
app.use('/api/messages', messageRouter)
app.use('/api/channels', channelRouter)

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})