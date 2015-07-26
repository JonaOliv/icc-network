function DocumentoEliminar(req,res){
  var fs = require('fs');
  var path = require('path');
  var mdlDocumentoBorrar = require("../../models/proyectos/proyectoDeleteDoc.js");
  var mdlDocumentoEncontrar = require("../../models/proyectos/proyectoBusquedaDOC.js");

  var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";
  var strProyecto = req.body.ProyectoID;
  var strDocumentoID = req.body.DocumentoID;
  var boolNingunError = true;

  if( strProyecto == null || strProyecto.length == 0 || /^\s+$/.test(strProyecto) ) {
    boolNingunError=false;
  }
  if( strDocumentoID == null || strDocumentoID.length == 0 || /^\s+$/.test(strDocumentoID) ) {
    boolNingunError=false;
  }
  if (!boolNingunError) {
    error(2002,"",500,req,res);
  }else{
    var strArchivoNombre="";
    mdlDocumentoEncontrar({archivo:strDocumentoID}, function(err,rs){
      if (err) {
        error(1013,"",500,req,res);
      }else {
        strArchivoNombre = rs[0].archivonombre;

        var file = strDireccionCarpArchivos + strProyecto + "/" + strArchivoNombre;

        fs.readFile(file, 'utf8', function (err,data) {
      		  if (err) {
      				error(2001,"",500,req,res);
      		  }else{
              fs.unlink(file,function(err) {
                if(err){
                  console.log("Error borrando archivo");
                }
              });//unlink
      			}
      	});//readFile

        if(boolNingunError){
          //Espacio para lo relacionado con la base de datos
          mdlDocumentoBorrar({archivo:strDocumentoID}, function(err,rs){
            if (err) {
              error(1013,"",500,req,res);
            }else {
              res.send("error":null,"data":rs);
            }
          });//mdlDocumentoBorrar
        }
      }//fin del else mdlDocumentoEncontrar
    });//mdlDocumentoEncontrar
  }

}

module.exports = DocumentoEliminar;
