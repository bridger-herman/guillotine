// Inspired by https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')
const fs = require('fs')

// https://stackoverflow.com/a/6274381
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
}

// Get the contents of the action cards dir
var actionCards = [];
var currentActionIndex = 0;
const NUMBER_ACTION_CARDS = 5;
fs.readdir('src/assets/action_cards', (err, contents) => {
  if (err) {
    console.error(err);
  } else {
    actionCards = contents;
    actionCards.shuffle();
    init();
  }
});

function init() {
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
    // https://stackoverflow.com/a/25897153
    actionsHand: {
      type: Sequelize.STRING,
      defaultValue: function() {
        let hand = [];
        for (let i = 0; i < NUMBER_ACTION_CARDS; i++) {
          hand.push(actionCards[currentActionIndex]);
          currentActionIndex++;
        }
        return JSON.stringify(hand);
      },
      get: function() {
        return JSON.parse(this.getDataValue('actionsHand'));
      }, 
      set: function(val) {
          return this.setDataValue('actionsHand', JSON.stringify(val));
      }
    },
    noblesHand: {
      type: Sequelize.STRING,
      defaultValue: '[]',
      get: function() {
        return JSON.parse(this.getDataValue('noblesHand'));
      }, 
      set: function(val) {
          return this.setDataValue('noblesHand', JSON.stringify(val));
      }
    }
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
}