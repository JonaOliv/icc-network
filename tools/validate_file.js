var fs = require("fs");

var validate_file = function(postFile, callback){

  if(postFile){
    if(postFile.size > 1024 * 1024 * 40){ // 10MB
    	callback({error: 1007},null);
    	fs.unlink(postFile.path); // Borramos el archivo
    }else{
    	callback(null, postFile);
    }
  }else{
    callback({error: 1009},null);
  }
};

module.exports = validate_file;
