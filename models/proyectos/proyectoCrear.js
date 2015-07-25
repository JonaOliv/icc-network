var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function crearProyecto(parms,callback){

  mysql.query("INSERT INTO proyectos (proyectonombre, proyectodescripcion,
    proyectoimagen, proyectodocumentacion, proyectoversion, proyectogiturl)
    values('%s','%s','%s','%s','%s','%s');",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = crearProyecto;
