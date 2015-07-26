function ProyectoActualizar(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');

  var mdlProyectoUpdate = require("../../models/proyectos/proyectoUpdate.js");

  var strProyectoNombre = req.body.ProyectoNombre;
  var strProyectoDescripcion = req.body.ProyectoDescripcion;
  var strProyectoImagen = req.body.ProyectoImagen;
  var strProyectoDocumentacion = req.body.ProyectoDocumentacion;
  var strProyectoVersion = req.body.ProyectoVersion;
  var strProyectogiturl = req.body.Proyectogiturl;
  var strProyectoID = req.body.ProyectoID;

  var boolNingunError = true;

  if( strProyectoID == null || strProyectoID.length == 0 || /^\s+$/.test(strProyectoID) ) {
    boolNingunError=false;
  }
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
    //preguntar acerca de los parametros
    var arregloParametros = [strProyectoNombre,strProyectoDescripcion,
                              strProyectoImagen,strProyectoDocumentacion,
                              strProyectoVersion,strProyectogiturl,
                            strProyectoID];
    mdlProyectoUpdate(arregloParametros, function(err,rs){
      if (err) {
        error(1013,"",500,req,res);
      }else {
        res.send("error":null,"data":rs);
      }
    });
  }
}


module.exports = ProyectoActualizar;
