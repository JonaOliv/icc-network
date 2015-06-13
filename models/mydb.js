var env = (process.argv[2])?process.argv[2]:'PRD';
var config = require('../tools/loadConfig.js')("../config.json");
var is_array = require('../tools/is_array.js');
var mysql = require('mysql');

function mydb(){
	var db = "";

	if(env == 'DEV'){
		db = mysql.createPool(config.mysqldb_dev);
	}else{
		db = mysql.createPool(config.mysqldb);
	}

	//Comprobamos la conexion a mysql
	db.getConnection(function(err, con){
		if(err){
			console.log(err);
		}

		con.release();
	});

	var query = function(_query,_parms,_callback){
		db.getConnection(function(err, con) {
			if(err){
				var error = require('../tools/error.js');
				error(998,err,null,null);
			}else{
				var exc = con.query(_query,_parms,function(err,res){

					if(err){
						var error = require('../tools/error.js');
						error(998,err,null,null);
					}

					con.release();

					//Si es arreglo y viene vacio, regresamos null en ves del arreglo
					if(is_array(res) && res.length == 0) res = null;

					_callback(err,res,sql);
				});

				sql = exc.sql;
			}
		});
	};

	var escape = function(variable){
		return db.escape(variable);
	};

	var escapeId = function(variable){
		return db.escapeId(variable);
	};

	return {
		query: query,
		escape: escape,
		escapeId: escapeId
	};
}

module.exports = mydb();
