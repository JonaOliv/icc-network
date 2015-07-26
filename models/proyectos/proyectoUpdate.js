var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function proyectoUpdate(parms,callback){

  mysql.query("UPDATE proyecto set proyectonombre="%s", proyectodescripcion="%s",
  proyectoImagen="%s", proyectoDocumentacion="%s", proyectoversion="%s",
  proyectoGitURL="%s" WHERE idproyecto= ?;",[parms.proyecto],function(err,rs){
    callback(err,rs);
  });

}

module.exports = proyectoUpdate;
