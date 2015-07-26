var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function insertarPerfil(parms,callback){

  mysql.query("INSERT INTO perfil (nombre, apellido,
    fechanac, tel, cel, direccion, perfiltipoid, Usuarios_userid)
    values('%s','%s','%d','%d','%d','%s','%d','%d' ) WHERE perfilid= ?;",[parms.perfil],function(err,rs){
    callback(err,rs);
  });

}

module.exports = insertarPerfil;
