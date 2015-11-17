// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var results = [];
  if (document.body.classList.contains(className)) {
      results.push(document.body);
    }
  function getClassName(node) {
    
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].classList !== undefined) {
        if (node.childNodes[i].classList.contains(className)) {
          results.push(node.childNodes[i]);
        }
        if (node.childNodes[i].childNodes.length > 0) {
          getClassName(node.childNodes[i]);
        }
      }
    }
  }
  getClassName(document.body);
  return results;
};
