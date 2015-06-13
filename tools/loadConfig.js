var fs = require("fs");
var json;

function loadConfig(file){
    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

module.exports = loadConfig;
