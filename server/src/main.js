const express = require('express')
const initDatabase = require('./database')

function run(port) {
  const app = express()
  
  const db = initDatabase()

  app.get('/', (req, res) => {
    res.json({
      hello: 'From Pokedex API'
    })
  })
  
  app.listen(port, () => {
    console.log(`✨ Server is listening on port ${port}`)
  })
}

/**
 * Entry point
 */
const args = process.argv.slice(2)
if (args.length !== 1) {
  console.log("Usage: node src/main.js <port>")
  process.exit(0)
}

const port = args[0]
run(parseInt(port, 10))
