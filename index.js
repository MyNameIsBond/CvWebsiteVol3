// Express
const express = require('express')
const app = express()
const port = 8080
const nodemailer = require('nodemailer')
// Body Parser
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/email', (req, res) => {
  const { name, email, subject, message } = req.body.data
  console.log(req.body.data)
  var mailOptions = {
    from: 'miltos.hajdini.2014@gmail.com',
    to: 'hajdinim@uni.coventry.ac.uk',
    subject: subject,
    html: `
    <h4>hello Tony</h4>
    <hr/>
    <p>${message}</p>
    <br/>
    <small>kind regards ${name}</small>
    <h4>my email is ${email}</h4>
    `
  }
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`server is on port: ${port}`)
})
