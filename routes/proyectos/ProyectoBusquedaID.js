function ProyectoBusquedaID(req,res){

  var mdlDocumento = require("../../models/proyectos/proyectoBusquedaP.js");

  //talves no vaya el POST
  if(req.method=='POST'){
    var strDireccionCarpArchivos = path.resolve("routes"+req.path,"..","..","..","archivos") + "/";
    var strProyectoID = req.body.ProyectoID;

    if ( strProyectoID == null || strProyectoID.length == 0 || /^\s+$/.test(strProyectoID) ) {
      error(2002,"",500,req,res);
    }else{
      mdlDocumento({proyecto:strProyectoID}, function(err,rs){
        if (err) {
          error(1013,"",500,req,res);
        }else {
          res.send("error":null,"data":rs);
        }
      });
    }
  }
}

module.exports = ProyectoBusquedaID;
