const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.json({ "message": "hello" })
})


app.listen(9000, () => console.log("listening on port 9000"))