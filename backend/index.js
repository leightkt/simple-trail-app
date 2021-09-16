const express = require('express')

const app = express()
const port = 9000
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const database = require('./database/Database')


app.get('/trails', (req, res) => {
    database('trails')
        .then(trails => res.json(trails))
})

app.post('/trails', (req, res) => {
    database('trails')
        .returning(['id', 'name', 'url', 'thumbUrl', 'length', 'elevationGain', 'description'])
        .insert({ name: req.body.name, url: req.body.url, thumbUrl: req.body.thumbUrl, length: req.body.length, elevationGain: req.body.elevationGain, description: req.body.description})
        .then(trail => res.json(trail[0]))
})

app.get('/trails/:id', (req, res) => {
    trail_id = req.params.id
    database('trails')
        .where({ id: trail_id})
        .then(trail => res.json(trail[0]))
})

app.put('/trails/:id', (req, res) => {
    database('trails')
        .where({ id: req.params.id })
        .update(req.body)
        .then(trail => res.json(trail[0]))
})

app.delete('/trails/:id', (req, res) => {
    database('trails')
        .where({ id: req.params.id })
        .del()
        .then(response => res.json({"message": `trail with ${id} successfully deleted`}))
})


app.listen(port, () => console.log(`listening on port ${port}`))