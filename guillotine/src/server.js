// Inspired by https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')

let app = express()
app.use(cors())
app.use(bodyParser.json())

let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
})

// id, createdAt, and updatedAt are added by sequelize automatically
let Player = database.define('players', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
})

// Initialize finale
finale.initialize({
  app: app,
  sequelize: database
})

// Create the dynamic REST resource for our Post model
let userResource = finale.resource({
  model: Player,
  endpoints: ['/players', '/players/:id']
})

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })