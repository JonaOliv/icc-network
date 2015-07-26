var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function perfil(parms,callback){

  mysql.query("SELECT * FROM perfil WHERE perfilid = ?;",[parms.perfil],function(err,rs){
    callback(err,rs);
  });

}

module.exports = perfil;
