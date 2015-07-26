var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function login(parms,callback){

  mysql.query("SELECT * FROM usuarios WHERE usermail = ?;",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = login;
