//create connection
// npm install the dependiesnc 
var mysql = require('');
var Sequalize = require('sequalize');

//creates database
var orm = new Sequalize('chat', 'root', '');

//define models (user, messages)
var User = orm.define('User', {
	username: Sequalize.STRING
});

var Messages = orm.define("Messages", {
	userdId: Sequalize.INTEGER,
	text: Sequalize.STRING,
	roomanme: Sequalize.STRING
});

// define relationship
User.hasMany(Messages);
Messages.belongsTo(User);

// sync the model to the database
User.sync();
Messages.sync();

//export
module.exports = orm;