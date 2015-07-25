var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function deleteProyecto(parms,callback){

  mysql.query("DELETE from proyecto WHERE idproyecto = ?;",[parms.proyecto],function(err,rs){
    callback(err,rs);
  });

}

module.exports = deleteProyecto;
