function ProyectoCrear(req,res){
  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var path = require('path');

  var mdlProyectoCrear = require("../../models/proyectos/proyectoCrear.js");

  var strProyectoNombre = req.body.ProyectoNombre;
  var strProyectoDescripcion = req.body.ProyectoDescripcion;
  var strProyectoImagen = req.files.ProyectoImagen.name;
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
        //Desde aqui comienza el ingreso de la imagen a la carpeta
        //creamos la carpeta
        var strProyectoNombreCarpeta = rs[0].idproyecto;/*revisar variable*/
        console.log(rs);
        var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";

        mkdirp(strDireccionCarpArchivos + strProyectoNombreCarpeta, function(err) {

        });
        //Leer posicion actual del archivo y escribir archivo en el destino "dest"
        var source = fs.createReadStream(req.files.ProyectoImagen.path);
        var dest = fs.createWriteStream(strDireccionCarpArchivos + strProyectoNombreCarpeta + "/" + strProyectoImagen);

        source.pipe(dest);

        source.on('end', function() {
          //borrar archivo original
          fs.unlink(req.files.ProyectoImagen.path,function(err) {
            if(err){
              console.log("Error borrando archivo");
            }
          });
        });

        source.on('error', function(err) {
          error(2004,"",500,req,res);
        });
        res.send({"error":null,"data":rs});
      }
    });//mdlProyectos
  }
}


module.exports = ProyectoCrear;
