var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function crearProyecto(parms,callback){

  mysql.query("INSERT INTO proyecto (proyectonombre, proyectodescripcion,
    proyectoImagen, proyectoDocumentacion, proyectoversion, proyectoGitURL)
    values('%s','%s','%s','%s','%s','%s');",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = crearProyecto;
