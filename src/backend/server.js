import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import home from './routes/home.js'

const port = process.env.PORT || 1414
const app = express()

app.use(cors())

const __dirname = dirname(fileURLToPath(import.meta.url))
const pathToStaticFolder = join(__dirname, '../dist')
app.use(express.static(pathToStaticFolder))

app.use('/', home)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})