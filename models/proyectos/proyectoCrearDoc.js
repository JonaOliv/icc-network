var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function crearDocumento(parms,callback){

  mysql.query("INSERT INTO archivo (archivonombre, archivoURL,
    archivoTamaño, archivoTipo,proyecto_idproyecto)
    values('%s','%s','%d','%s','%s','%s');",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = crearDocumento;
