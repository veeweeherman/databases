var db = require('../db');





module.exports = {
  messages: {
    get: function () {console.log("inside models messages get")}, // a function which produces all the messages
    post: function () {
     db.query('SELECT * FROM messages;', function(err, result){
      console.log('inside the query!!!!!!!!!!!!');
      if(err){
        console.log('WE have an error!!!!!!!!');
        throw err;
      }else{
        console.log(result[0]); 
      }
    });   
   }
 },

 users: {
    // Ditto as above.
    get: function () {
      console.log('hi from inside models users get function!!!!!!')
    },
    post: function (req, res) {
      var username = req.body.username;
      var query = "INSERT INTO messages (username) VALUES " + mysql.escape(username) + ";";
      console.log('query', query);
      var queryObj = db.query(query, function(err, rows, result){
        console.log('inside the query!!!!!!!!!!!!');
        if(err){
          console.log('WE have an error!!!!!!!!');
          throw err;
        }else{
          console.log('we do not have an error!');
        }
      });

    }
  }
}
