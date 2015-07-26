var db = require('../db');
var mysql = require('mysql'); 





module.exports = {
  messages: {
    get: function () {console.log("inside models messages get")}, // a function which produces all the messages
    post: function (req, res) {
     var username = req.body.username;
     var message = req.body.message;
     var room = req.body.room;
     var query = "INSERT INTO messages (username, message, room) VALUES ('"+username+"','"+message+"','"+room+"');";
     var queryObj = db.query(query, function(err, rows, result){
      if(err){
        console.log('WE have an error!!!!!!!!');
        throw err;
      }else{
        console.log('we do not have an error!');
      }
    });
     res.send();
   }
 },

users: {
    // Ditto as above.
    get: function () {
      console.log('hi from inside models users get function!!!!!!')
    },
    post: function (req,res) {
      var username = req.body.username;
      var query = "INSERT INTO messages (username) VALUES ('" + username + "');";
      db.query(query, function(err, rows, result){
        console.log('inside the query!!!!!!!!!!!!');
        if(err){
          console.log('WE have an error!!!!!!!!');
          throw err;
        }else{
          console.log('we do not have an error!');
        }
      });
      res.send();
    }
  }
}
