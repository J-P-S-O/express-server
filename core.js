const express = require('express')
const app = express()
let lib = require("./lib")
app.use(lib.existent)// the server
app.use(express.static('.'))
app.listen(3000, () => {
  console.log('listening')
})
