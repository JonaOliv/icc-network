var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function DeleteDoc(parms,callback){

  mysql.query("DELETE from archivo WHERE idarchivo = ?;",[parms.archivo],function(err,rs){
    callback(err,rs);
  });

}

module.exports = DeleteDoc;
