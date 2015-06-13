var error = require("../tools/error.js");

function routes(req,res){
  try{
    (require("./"+req.params.mdl+"/"+req.params.acc+".js")(req,res));
  }catch(e){
    console.log(e);
    error(1000,e,400,req,res);
  }
}

module.exports = routes;
