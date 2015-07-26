var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function actualizarUsuario(parms,callback){

  mysql.query("UPDATE INTO perfil (nombre, apellido,
    fechanac, tel, cel, direccion, perfiltipoid, Usuarios_userid)
    values('%s','%s','%d','%d','%d','%s','%d','%d' );",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = actualizarUsuario;
