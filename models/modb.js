var env = (process.argv[2])?process.argv[2]:'PRD';
var config = require('../tools/loadConfig.js')("../config.json");
var is_array = require('../tools/is_array.js');
var mongodb = require('mongodb');
var error = require("../tools/error.js");

function modb(){
	var server = "";
  var db = "";

	if(env != 'DEV'){
    server = new mongodb.Server(config.mongodb.host,config.mongodb.port);
    db = new mongodb.Db(config.mongodb.db,server,{safe:true});
	}else{
    server = new mongodb.Server(config.mongodb_dev.host,config.mongodb_dev.port);
    db = new mongodb.Db(config.mongodb_dev.db,server,{safe:true});
	}

  db.open(function(err,db){
    if(err){
      console.log({error: 1008});
    }
  });

  var collection = function(col){
    return db.collection(col);
  }

	return {
    collection: collection,
    db: db,
    server: server
  };
}

module.exports = modb();
