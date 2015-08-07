function probadorModeles(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');

  var mdlProyectoCrear = require("../../models/proyectos/proyectoCrear.js");

  var strProyectoNombre = "asdad";
  var strProyectoDescripcion = "jlkj";
  var strProyectoImagen = "hllh";
  var strProyectoDocumentacion = "kgkd";
  var strProyectoVersion = "sfaffa";
  var strProyectogiturl = "gkgkgfka";

    //Espacio para lo relacionado con la base de datos
    var arregloParametros = [strProyectoNombre,strProyectoDescripcion,
                            strProyectoImagen,strProyectoDocumentacion,
                            strProyectoVersion,strProyectogiturl];
    mdlProyectos(arregloParametros, function(err,rs){
      if (err) {
        console.log(err);
      }else {
        //Desde aqui comienza el ingreso de la imagen a la carpeta
        //creamos la carpeta
        console.log(rs);

      }
    });//mdlProyectos
}


module.exports = probadorModeles;
