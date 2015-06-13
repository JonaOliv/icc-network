var app = require('./app');
var http = require('http');
var debug = require('debug')('iccnetwork');
var config = require('./tools/loadConfig.js')("../config.json");
var env = process.argv[2];
var server = http.createServer(app);

if(env == 'PRD'){
  var numCPUs = require('os').cpus().length;
  var cluster = require('cluster');

  if(numCPUs > 6)numCPUs = 6;

  if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
      //REINICIA WORKET SERVIDOR FALLIDO
      cluster.fork();
    });
  }else{

  	//Inicia hilo
    server.listen(config.port);
    server.on('error', onError);
    server.on('listening', onListening);
    // console.log('Escuchando en puerto '+config.port+" ("+env+")");
  }

}else{
  //Inicia hilo
  server.listen(config.port);
  server.on('error', onError);
  server.on('listening', onListening);
}


//Manejador de Errores
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + config.port
    : 'Puerto ' + config.port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' faltan permisos');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' ya se encuentra en uso');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


//Manejador de hilo
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'puerto ' + addr.port;
  debug('Escuchando en ' + bind + " ("+env+")");
}
