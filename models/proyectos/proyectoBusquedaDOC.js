var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function ProyectoBusquedaDOC(parms,callback){

  mysql.query("SELECT * FROM archivo WHERE idarchivo = '%s' or
                                            archivonombre = '%s' or
                                            archivoURL = '%s' or
                                            archivoTamaño = '%s' or
                                            archivoTipo = '%s' or
                                            proyecto_idproyecto = '%s';"
                                            ,[parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto],function(err,rs){
    callback(err,rs);
  });

}

module.exports = ProyectoBusqueda;
