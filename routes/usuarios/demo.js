
function demo(req,res){

  var usuarios_demo = require("../../models/usuarios/demo.js");

  usuarios_demo({usuario:"remd"},function(err,rs){
    res.send({"mensaje":"Hola a todos! desde USUARIOS!", data: rs});
  });

}

module.exports = demo;
