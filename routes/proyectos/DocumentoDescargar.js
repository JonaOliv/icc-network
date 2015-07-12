var error = require("../../tools/error.js");
var fs = require('fs');

function DocumentoDescargar(req,res){
	var file="/home/jonathan/icc-network/tmp/" + req.body.nombreArchivo;

	if( req.body.nombreArchivo == null || req.body.nombreArchivo.length == 0 || /^\s+$/.test(req.body.nombreArchivo) ) {
	  error(2002,"",500,req,res);
	}else {
		fs.readFile(file, 'utf8', function (err,data) {
		  if (err) {
				error(2001,"",500,req,res);
		    console.log(err);
		  }else{
				res.download(file);
			}
		});
	}
}

module.exports = DocumentoDescargar;
