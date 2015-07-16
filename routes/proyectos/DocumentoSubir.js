function DocumentoSubir(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');

  if(req.method=='POST'){
    var strDireccionCarpArchivos = '/home/jonathan/icc-network/archivos/';
    var strProyecto = req.params.ProyectoID;
    var strNombreArchivo = req.files.archivo.name;
    var boolNingunError = true;

    //crea directorio si no existe
    mkdirp(strDireccionCarpArchivos + strProyecto, function(err) {

    });

    //Leer posicion actual del archivo y escribir archivo en el destino "dest"
    var source = fs.createReadStream(req.files.archivo.path);
    var dest = fs.createWriteStream(strDireccionCarpArchivos + strProyecto + strNombreArchivo);

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
    //res.send("Hello World!");
  }
}


module.exports = DocumentoSubir;
