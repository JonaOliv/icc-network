var messages = require('./loadConfig.js')("../messages.json");
var is_array = require("./is_array.js");

function error(errord,desc,status,req,res){

  if(is_array(errord)){
    var errors = new Array();
    for(err in errord){
      errors.push({
        Id: errord[err].code,
        Description: (messages[errord[err].code+""]||(desc||""))+((errord[err].desc)?" ["+errord[err].desc+"]":""),
        Type: 1
      });
    }

    if(req && res){
      res.status(status).send({error: errors,data: null});
    }
  }else{
    var err = {
      Id: errord,
      Description: (messages[errord+""]||(desc||"")),
      Type: 1
    };

    if(req && res){
      res.status(status).send({error: [err],data: null});
    }

    console.log(err);
  }
}

module.exports = error;
