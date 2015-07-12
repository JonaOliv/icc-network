function DocumentoSubir(req,res){
  //192.168.29.145:2424/usuarios/testDocumentos1
  //http://192.168.29.145:2424/usuarios/testDocumentos1
  var fs = require('fs');
  var mkdirp = require('mkdirp');

  var strDireccionCarpArchivos = '/home/jonathan/icc-network/archivos/';
  var strProyecto = 'IDProyecto/';
  var strNombreArchivo = req.files.archivo.name;

  //crea directorio si no existe
  mkdirp(strDireccionCarpArchivos + strProyecto, function(err) {

  });

  //Leer posicion actual del archivo y escribbir archivo en el destino "dest"
  var source = fs.createReadStream(req.files.archivo.path);
  var dest = fs.createWriteStream(strDireccionCarpArchivos + strProyecto + strNombreArchivo);

  source.pipe(dest);
  source.on('end', function() {
    //borrar archivo original
    fs.unlink(req.files.archivo.path,function(err) {
      if(err)
        console.log("Error borrando archivo");
    });
  });
  source.on('error', function(err) { });
/*
  console.log(req.files.archivo.name);
  console.log(req.files.archivo.path);
  console.log(__dirname);*/

  console.log(req.files.archivo);
  res.send(req.files.archivo);
}


module.exports = DocumentoSubir;
