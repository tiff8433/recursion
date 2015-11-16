// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
var newObj;
  // check to see if object is a number
  if(typeof obj === 'number'){
    //return string of number
    return '' + obj;
  }
  if(obj === null){
    return '' + null;
  }
  if(typeof obj === 'boolean'){
    return '' + obj;
  }
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(Array.isArray(obj)){
    if(obj.length === 0){
      return '[]';
    }
    newObj = 
    for(var i = 1; i < obj.length; i++){

    }

  }
};
