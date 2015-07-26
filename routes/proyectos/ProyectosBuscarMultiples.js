function ProyectosBuscarMultiples(req,res){

  var mdlProyectos = require("../../models/proyectos/proyectoBusquedaP.js");

  //talves no vaya el POST
  if(req.method=='POST'){
    var strDatoBuscado = req.body.datoBuscado;

    if ( strDatoBuscado == null || strDatoBuscado.length == 0 || /^\s+$/.test(strDatoBuscado) ) {
      error(2002,"",500,req,res);
    }else{
      mdlProyectos({proyecto:strDatoBuscado}, function(err,rs){
        if (err) {
          error(1013,"",500,req,res);
        } else {
          res.send("error":null,"data":rs);
        }
      });
    }
  }
}

module.exports = ProyectosBuscarMultiples;
