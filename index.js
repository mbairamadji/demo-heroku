const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/front/build'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/build/index.html')
})

app.listen(port, () => {
    console.log("App listening on 3000")
})