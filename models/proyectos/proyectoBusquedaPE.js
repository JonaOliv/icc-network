var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function ProyectoBusqueda(parms,callback){

  mysql.query("SELECT * FROM proyecto WHERE idproyecto like '%s';"
                                            ,[parms.proyecto],function(err,rs){
    callback(err,rs);
  });

}

module.exports = ProyectoBusqueda;
