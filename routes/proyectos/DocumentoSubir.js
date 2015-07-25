function DocumentoSubir(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');
  var mdlDocumento = require("../../models/proyectos/proyectoCrearDoc.js");

  if(req.method=='POST'){
    var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";
    //var strProyecto = req.params.ProyectoID;
    var strProyecto = req.query.ProyectoID;
    var strNombreArchivo = req.files.archivo.name;

    var strArchivoURL = "archivos/"+strProyecto+"/"+strNombreArchivo;//???????????????????????????

    var strArchivoTamanio = req.files.archivo.size;
    var strArchivoTipo = req.files.archivo.extension;

    var boolNingunError = true;

    //crea directorio si no existe
    mkdirp(strDireccionCarpArchivos + strProyecto, function(err) {

    });

    //Leer posicion actual del archivo y escribir archivo en el destino "dest"
    var source = fs.createReadStream(req.files.archivo.path);
    var dest = fs.createWriteStream(strDireccionCarpArchivos + strProyecto + "/" + strNombreArchivo);

    source.pipe(dest);

    source.on('end', function() {
      //borrar archivo original
      fs.unlink(req.files.archivo.path,function(err) {
        if(err){
          console.log("Error borrando archivo");
        }
      });
    });

    source.on('error', function(err) {
      boolNingunError=false;
      error(2003,"",500,req,res);
    });

    if(boolNingunError){
      //Espacio para lo relacionado con la base de datos
    }


    console.log(req.files.archivo);
    res.send(req.files.archivo);
  }

  if(req.method == 'GET'){

  }
}


module.exports = DocumentoSubir;
