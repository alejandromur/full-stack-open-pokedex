const express = require('express')
const app = express()
let timesDeployed = 1

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send(timesDeployed++)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
