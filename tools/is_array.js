
function is_array(variable){
  if( Object.prototype.toString.call(variable) === '[object Array]' ) {
    return true;
  }else{
  	return false;
  }
}

module.exports = is_array;
