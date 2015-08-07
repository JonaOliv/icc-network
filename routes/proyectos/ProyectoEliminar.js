function ProyectoEliminar(req,res){
    var path = require('path');
    var mdlDocumento = require("../../models/proyectos/proyectoDeleteP.js");
    var rimraf = require('rimraf');

    var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";
    var strProyecto = req.body.ProyectoID;

    var boolNingunError = true;

    if ( strDireccionCarpArchivos == null || strDireccionCarpArchivos.length == 0 || /^\s+$/.test(strDireccionCarpArchivos) ) {
      boolNingunError = false;
    }
    if ( strProyecto == null || strProyecto.length == 0 || /^\s+$/.test(strProyecto) ) {
      boolNingunError = false;
    }

    if (boolNingunError) {
      rimraf(strDireccionCarpArchivos + strProyecto, function(err) {
        if (err) { throw err; }
      });
    }else {
      console.log("Error borrando archivo");
    }

    if(boolNingunError){
      //Espacio para lo relacionado con la base de datos
      mdlDocumento({proyecto:strProyecto}, function(err,rs){
        if (err) {
          error(1013,"",500,req,res);
        }else{
          res.send({"error":null,"data":rs});
        }
      });
    }

}

module.exports = ProyectoEliminar;
