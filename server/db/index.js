var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
  user: "root",
  password: "vyjamil",
  database: "chat"
});

dbConnection.query('select username;', function(err, result){
  console.log('inside the query!!!!!!!!!!!!');
  if(err){
    console.log('WE have an error!!!!!!!!');
    throw err;
  }else{
    console.log(result[0]);       // Column1 as a result
  }
});


// dbConnection.connect();


// dbConnection.end();
