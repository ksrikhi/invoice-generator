const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const application =require('./routes/application');

app.use('/api', application);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})