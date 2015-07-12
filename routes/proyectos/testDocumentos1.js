function testDocumentos1(req,res){
  //192.168.29.145:2424/usuarios/testDocumentos1
  //http://192.168.29.145:2424/usuarios/testDocumentos1
  var archivo = req.files.archivo;
  //var oracion = req.body.oracion;
  var mensaje = "El archivo que enviastes tiene estas propiedades:\n";
  mensaje+="Tamaño del archivo: "+archivo.size+" bytes\n";
  mensaje+="Nombre del archivo: "+archivo.name+"\n";
  mensaje+="Extension del archivo: "+ archivo.extension +"\n";
  res.send(mensaje);
  //res.send(archivo);
  console.log(archivo);
}


module.exports = testDocumentos1;
