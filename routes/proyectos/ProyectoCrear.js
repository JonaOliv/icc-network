function ProyectoCrear(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');

  if(req.method=='POST'){
    var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";
    var strProyectoNombre = req.body.ProyectoNombre; // la que tienes que revisar juanka

    if (/*La condicionante*/) {
      error(2001,"",500,req,res);
    } else {
      //Espacio para lo relacionado con la base de datos
    }

    //crea directorio si no existe
    mkdirp(strDireccionCarpArchivos + strProyectoNombre, function(err) {

    });
  }

  if(req.method == 'GET'){

  }
}


module.exports = ProyectoCrear;
