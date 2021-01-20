const express = require('express')
var argv = require("minimist")(process.argv)
const app = express()
let lib = require("./lib")
app.use(lib.existent)// the server
app.use(express.static('.'))
app.listen(argv.port || 3000, () => {
  console.log('listening')
})
