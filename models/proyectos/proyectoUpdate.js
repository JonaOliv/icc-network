var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function proyectoUpdate(parms,callback){

  mysql.query("UPDATE proyecto set proyectonombre=" ", proyectodescripcion=" ",
  proyectoImagen=" ", proyectoDocumentacion=" ", proyectoversion=" ",
  proyectoGitURL=" " WHERE idproyecto= ?;",[parms.proyecto],function(err,rs){
    callback(err,rs);
  });

}

module.exports = proyectoUpdate;
