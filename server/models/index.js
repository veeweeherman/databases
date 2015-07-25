var db = require('../db');




module.exports = {
  messages: {
    get: function () {console.log("inside models messages get")}, // a function which produces all the messages
    post: function () {
       // a function which can be used to insert a message into the database
     }
   },

   users: {
    // Ditto as above.
    get: function () {
    },
    post: function () {
      var foo = [1,2,3]
      dbConnection.query('SELECT * FROM messages;', foo, function(err, result){
        console.log('inside the query!!!!!!!!!!!!');
        if(err){
          console.log('WE have an error!!!!!!!!');
          throw err;
        }else{
    console.log(result[0]);       // Column1 as a result
  }
});   
    }
  }
};

