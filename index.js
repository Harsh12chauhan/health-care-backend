const connecttoMongo = require('./db');
const express = require('express')
const cors = require("cors")
connecttoMongo();
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


app.listen(port, () => {
  console.log(`health care is listening on port ${port}`)
})

app.use('/api/data', require('./router/RouterUser'))

