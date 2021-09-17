const express = require('express')
const cors = require('cors')
const queries = require('./queries')
const { allTrails, findTrail, createTrail, updateTrail, deleteTrail } = require('./queries')

const app = express()
const port = 9000
const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE'
}

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors(corsOptions))


app.get('/trails', (__, res) => {
    allTrails()
        .then(trails => res.status(200).send(trails))
})

app.get('/trails/:id', (req, res) => {
    const trailId = req.params.id
    findTrail(trailId)
        .then(trail => {
            if (trail[0]) {
                res.status(200).send(trail[0])
            } else {
                res.status(404).send({"errors": "trail id not found"})
            }
        })
})

// will handle single or multiple trails
app.post('/trails', (req, res) => {
    createTrail(req.body)
        .then(trails => res.status(200).send(trails))
        .catch(error => {
            res.status(400).send({ errors: error.message })
        })
})

app.put('/trails/:id', (req, res) => {
    const trailId = req.params.id
    updateTrail(trailId, req.body)
        .then(trailUpdatedCount => {
            if (trailUpdatedCount > 0) {
                findTrail(trailId)
                    .then(trail => res.status(202).send(trail[0]))
            } else {
                res.status(404).send({"errors": "no trail with that id found"})
            }
        })
        .catch(error => {
            res.status(400).send({ errors: error.message })
        })
})

app.delete('/trails/:id', (req, res) => {
    const trailId = req.params.id
    deleteTrail(trailId)
        .then(deletedRowCount => {
            if (deletedRowCount !== 0) {
                res.status(202).send({deleted: `trail id: ${trailId}`})
            } else {
                res.status(404).send({"errors": "no trail with that id found"})
            }
        })
        .catch(error => {
            res.status(400).send({ errors: error.message })
        })
})


app.listen(port, () => console.log(`listening on port ${port}`))