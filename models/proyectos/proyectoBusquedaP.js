var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function ProyectoBusqueda(parms,callback){

  mysql.query("SELECT * FROM proyecto WHERE idproyecto like '%s' or
                                            proyectonombre like '%s' or
                                            proyectodescripcion like '%s' or
                                            proyectoImagen like '%s' or
                                            proyectoDocumentacion like '%s' or
                                            proyectoversion like '%s' or
                                            proyectoGitURL like '%s';"
                                            ,[parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto,parms.proyecto],function(err,rs){
    callback(err,rs);
  });

}

module.exports = ProyectoBusqueda;
