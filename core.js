import express from 'express' 
import minimist from  "minimist"
let argv = minimist(process.argv)
const app = express()
import { existent, dir  } from "./lib.mjs"
app.use(existent)// the server
app.use(dir)
app.use(express.static('.'))

app.listen(argv.port || 3000, () => {
  console.log('listening')
})
