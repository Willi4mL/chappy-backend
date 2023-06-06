import express from 'express'
import { getDb } from '../data/database.js'
import { generateId } from '../data/validation.js'

const router = express.Router()
const db = getDb() 

///GET
router.get('/', async (req, res) => {
    await db.read()
    res.send(db.data.channels)
})

///GET ID
router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)

    if (!isNaN(id)) {
        await db.read()
        const channel = db.data.channels.find((c) => c.id === id)
        if (channel) {
            res.send(channel);
        } else {
            res.status(404).send('Channel not found.')
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
    const index = db.data.channels.findIndex(channel => channel.id === id)
    if (index === -1) {
        res.sendStatus(404)
        return
    }

    db.data.channels.splice(index, 1)
    await db.write()

    res.sendStatus(200)
});

///POST
router.post('/', async (req, res) => {
    let addChannel = req.body

    await db.read()
    addChannel.id = generateId()
    db.data.channels.push(addChannel)
    await db.write()
    res.send({ id: addChannel.id })
})

///PUT
router.put('/:id', async (req, res) => {
    const id = Number(req.params.id)

    await db.read()
    const oldChannelIndex = db.data.channels.findIndex(channel => channel.id === id)
    if(oldChannelIndex === -1) {
        res.sendStatus(404)
        return
    }

    const updatedChannel = req.body
    updatedChannel.id = id
    db.data.channels[oldChannelIndex] = updatedChannel
    await db.write()
    res.sendStatus(200)
})



export default router