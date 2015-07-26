function ProyectoCrear(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');

  var mdlProyectoCrear = require("../../models/proyectos/proyectoCrear.js");

  var strProyectoNombre = req.body.ProyectoNombre;
  var strProyectoDescripcion = req.body.ProyectoDescripcion;
  var strProyectoImagen = req.body.ProyectoImagen;
  var strProyectoDocumentacion = req.body.ProyectoDocumentacion;
  var strProyectoVersion = req.body.ProyectoVersion;
  var strProyectogiturl = req.body.Proyectogiturl;

  var boolNingunError = true;

  if( strProyectoNombre == null || strProyectoNombre.length == 0 || /^\s+$/.test(strProyectoNombre) ) {
    boolNingunError=false;
  }
  if( strProyectoDescripcion == null || strProyectoDescripcion.length == 0 || /^\s+$/.test(strProyectoDescripcion) ) {
    boolNingunError=false;
  }
  if( strProyectoImagen == null || strProyectoImagen.length == 0 || /^\s+$/.test(strProyectoImagen) ) {
    boolNingunError=false;
  }
  if( strProyectoDocumentacion == null || strProyectoDocumentacion.length == 0 || /^\s+$/.test(strProyectoDocumentacion) ) {
    boolNingunError=false;
  }
  if( strProyectoVersion == null || strProyectoVersion.length == 0 || /^\s+$/.test(strProyectoVersion) ) {
    boolNingunError=false;
  }
  if( strProyectogiturl == null || strProyectogiturl.length == 0 || /^\s+$/.test(strProyectogiturl) ) {
    boolNingunError=false;
  }
  if (!boolNingunError) {
    error(2002,"",500,req,res);
  }  else {
    //Espacio para lo relacionado con la base de datos
    var arregloParametros = [strProyectoNombre,strProyectoDescripcion,
                            strProyectoImagen,strProyectoDocumentacion,
                            strProyectoVersion,strProyectogiturl];
    mdlProyectos(arregloParametros, function(err,rs){
      if (err) {
        error(1013,"",500,req,res);
      }else {
        var strProyectoNombreCarpeta = rs[0]./*la reemplazamos por la que nos regresan*/
        mkdirp(strDireccionCarpArchivos + strProyectoNombreCarpeta, function(err) {

        });
        res.send("error":null,"data":rs);
      }
    });
  }
}


module.exports = ProyectoCrear;
