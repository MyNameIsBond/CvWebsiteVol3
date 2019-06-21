// Express
const express = require('express')
const app = express()
const port = 8080

// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/email', (req, res) => {
  console.log(req.data)
})

app.listen(port, () => {
  console.log(`server is on port: ${port}`)
})
