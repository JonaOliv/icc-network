function DocumentoSubir(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');
  var mdlDocumento = require("../../models/proyectos/proyectoCrearDoc.js");

    var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";
    var strProyecto = req.body.ProyectoID;
    var strNombreArchivo = req.files.archivo.name;
    var strArchivoURL = "archivos/"+strProyecto+"/"+strNombreArchivo;
    var strArchivoTamanio = req.files.archivo.size;
    var strArchivoTipo = req.files.archivo.extension;

    var boolNingunError = true;
    if( strProyecto == null || strProyecto.length == 0 || /^\s+$/.test(strProyecto) ) {
      boolNingunError=false;
    }else {
      //crea directorio si no existe
      mkdirp(strDireccionCarpArchivos + strProyecto, function(err) {

      });
    }

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
      var arregloParametros = [strNombreArchivo,strArchivoURL,parseInt(strArchivoTamanio),strArchivoTipo,strProyecto];
      mdlDocumento(arregloParametros, function(err,rs){
        if (err) {
          error(1013,"",500,req,res);
        }else {
          res.send("error":null,"data":rs);
        }
      });
    }
}


module.exports = DocumentoSubir;
