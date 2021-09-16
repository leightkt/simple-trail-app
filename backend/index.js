const express = require('express')

const app = express()
const port = 9000
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.json({ "message": "hello" })
})

app.get('/trails/:id', (req, res) => {
    id = req.params.id
    res.json({ "id": id })
})

app.post('/trails', (req, res) => {
    console.log(req.body)
    const name = req.body.name
})

app.listen(port, () => console.log(`listening on port ${port}`))