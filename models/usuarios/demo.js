var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function demo(parms,callback){

  mysql.query("SELECT * FROM usuarios WHERE usuario = ?;",[parms.usuario],function(err,rs){
    var res = {nombre: rs[0].nombre}
    callback(null,res);
  });

}

module.exports = demo;
