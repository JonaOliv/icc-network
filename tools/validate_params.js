var regex = require("../tools/loadConfig.js")("../models/regex.json");

function validate_params(values,params,requeridos,retorno){
  var err = new Array();

  try{
    var valuesJ = {};

    if(typeof values === 'object'){
      valuesJ = values;
    }else{
      valuesJ = JSON.parse(values);
    }

    for(parm in valuesJ){

      if(params[parm] != undefined){
        if(params[parm].regex == 'json'){
          try{
            JSON.parse(valuesJ[parm]);
          }catch(e){
            err.push({code: 1014, desc: parm});
          }
        }else{
          if(!valuesJ[parm].match(new RegExp(regex[params[parm].regex],""))){
            err.push({code: 1014, desc: parm});
          }
        }
      }else{
        err.push({code: 1005, desc: parm}); //Parametro desconocido
      }
    }

    for(req in requeridos){
      if(valuesJ[requeridos[req]] == undefined){
        err.push({code: 1010, desc: requeridos[req]}); //Parametro requerido faltante
      }
    }

    if(err.length == 0)retorno(null)
    else retorno(err);
  }catch(e){
    err = 1006; //Coleccion de parametros invalida.
    console.log(e);
    retorno(err);
  }
}

module.exports = validate_params;
