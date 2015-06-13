var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var jade = require('jade');
var config = require('./loadConfig.js')("../config.json");

function correo(){

  var validacion = function(mail){

  	var data = {};

  	data.from = "ERP Web Services<"+config.correo.noreply+">";
  	data.to = mail.usrEmail;
  	data.subject = "Activación de Cuenta";
  	data.html = jade.renderFile("resources/templates/mailvalidation.jade",mail);

  	enviar(data, 'VAL');

  }

  var enviar = function (data,tipo){

  	var transporter = nodemailer.createTransport(sesTransport({
  	    accessKeyId: config.aws.accessKeyId,
  	    secretAccessKey: config.aws.secretAccessKey,
  			region: config.aws.region,
  	    rateLimit: 10
  	}));

  	transporter.sendMail(data,function(err,info){
      console.log(err);
      console.log(info);
    });
  };

  return {
    validacion: validacion,
    enviar: enviar
  };
}

module.exports = correo();
