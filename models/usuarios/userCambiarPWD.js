var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function cambiarPWD(parms,callback){

  mysql.query("UPDATE usuarios SET userpwd = MD5('') WHERE usermail = '';",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = cambiarPWD;
