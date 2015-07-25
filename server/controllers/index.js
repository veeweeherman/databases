var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('inside the GET of controller messages');
      models.messages.get();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('inside the POST of controller messages');
      req.on('data', function() {
        console.log('im trapped inside a post and I cannot find the door!! :(');
      });
      req.on('end', function() {
        console.log('post request is ending!!!');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside the GET of controller users');
    },
    post: function (req, res) {
      console.log('inside the POST of controller users');
      req.on('data', function() {
        console.log('im trapped inside a post and I cannot find the door!! :(');
      });
      req.on('end', function() {
        console.log('post request is ending!!!');
      });
    }
  }
};

