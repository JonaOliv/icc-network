function demo2(req,res){

  var usuarios_demo = require("../../models/usuarios/demo.js");

  /*usuarios_demo({usuario:"remd"},function(err,rs){
    res.send("Hola mundo!");
  });*/
  res.send("Hola Mundo!");
}

module.exports = demo2;
