import express from 'express'
import { getDb } from '../data/database.js'
import { generateId } from '../data/validation.js'

const router = express.Router()
const db = getDb() 

///GET
router.get('/', async (req, res) => {
    await db.read()
    res.send(db.data.messages)
})

///GET ID
router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)

    if (!isNaN(id)) {
        await db.read()
        const message = db.data.messages.find((m) => m.id === id)
        if (message) {
            res.send(message);
        } else {
            res.status(404).send('Messages not found.')
        }
    } else {
        res.status(400).send('Invalid id.')
    }
});

///DELETE
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id) || id < 0) {
        res.sendStatus(400)
        return
    }
    await db.read()
    const index = db.data.messages.findIndex(message => message.id === id)
    if (index === -1) {
        res.sendStatus(404)
        return
    }

    db.data.messages.splice(index, 1)
    await db.write()

    res.sendStatus(200)
});

///POST
router.post('/', async (req, res) => {
    let addMessage = req.body

    await db.read()
    addMessage.id = generateId()
    db.data.messages.push(addMessage)
    await db.write()
    res.send({ id: addMessage.id })
})

///PUT
router.put('/:id', async (req, res) => {
    const id = Number(req.params.id)

    await db.read()
    const oldMessageIndex = db.data.messages.findIndex(message => message.id === id)
    if(oldMessageIndex === -1) {
        res.sendStatus(404)
        return
    }

    const updatedMessage = req.body
    updatedMessage.id = id
    db.data.messages[oldMessageIndex] = updatedMessage
    await db.write()
    res.sendStatus(200)
})



export default router