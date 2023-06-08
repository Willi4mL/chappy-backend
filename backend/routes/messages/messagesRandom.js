import express from 'express'
import { getDb } from '../../data/database.js'
import { generateId } from '../../data/validation.js'

const router = express.Router()
const db = getDb()

function findMessages() {
    const channels = db.data.channels
    const messages = channels.flatMap(channel => channel.messagesRandom)
    return messages
}

///GET
router.get('/', async (req, res) => {
    await db.read()
    res.send(findMessages())
})

///GET ID
router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)

    if (!isNaN(id)) {
        await db.read()
        const message = findMessages().find((m) => m.id === id)
        if (message) {
            res.send(message);
        } else {
            res.status(404).send('Messages not found.')
        }
    } else {
        res.status(400).send('Invalid id.')
    }
})

///DELETE
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id) || id < 0) {
        res.sendStatus(400)
        return
    }
    await db.read();
    const channels = db.data.channels

    for (let i = 0; i < channels.length; i++) {
        const messages = channels[i].messagesRandom
        const index = messages.findIndex(message => message.id === id)
        if (index !== -1) {
            messages.splice(index, 1)
            await db.write()
            res.sendStatus(200)
            return;
        }
    }

    res.sendStatus(200)
})

///POST
router.post('/', async (req, res) => {
    let addMessage = req.body

    await db.read()
    const channels = db.data.channels
    for (let i = 0; i < channels.length; i++) {
        const channel = channels[i]

		if(channel.messagesRandom) {
			const messages = channel.messagesRandom
        addMessage.id = generateId()
        messages.push(addMessage)
        await db.write()
        res.send({ id: addMessage.id })
        return;
    }
}
})

///PUT
router.put('/:id', async (req, res) => {
    const id = Number(req.params.id)

    await db.read()
    const channels = db.data.channels

    for (let i = 0; i < channels.length; i++) {
        const messages = channels[i].messagesRandom
        const index = messages.findIndex(message => message.id === id)
        if (index !== -1) {
            const updatedMessage = req.body
            updatedMessage.id = id
            messages[index] = updatedMessage
            await db.write()
            res.sendStatus(200)
            return
        }
    }

    res.sendStatus(404);
})



export default router