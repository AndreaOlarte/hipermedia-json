// (function ($) {
// })(jQuery);

function readTextFile(file, callback) { 
  var rawFile = new XMLHttpRequest(); 
  rawFile.overrideMimeType("application/json"); 
  rawFile.open("GET", file, true); 
  rawFile.onreadystatechange = function() { 
    if (rawFile.readyState === 4 && rawFile.status == "200") { 
      callback(rawFile.responseText);
    } 
  } 
  rawFile.send(null); 
} //usage: readTextFile("/Users/Documents/workspace/test.json", function(text){ var data = JSON.parse(text); console.log(data); }); 

// var data = [];

// readTextFile("products.json", function(text){ 
//   var data = JSON.parse(text); 
//   console.log(data); 
// }); 


// SÍ FUNCIONA
// var myObj = {name: "John", age: 31, city: "New York"};
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// text = localStorage.getItem("testJSON");
// var obj = JSON.parse(text);
// document.getElementById("product-name").innerHTML = obj.name; 

var requestURL = 'https://raw.githubusercontent.com/AndreaOlarte/hipermedia-json/master/products.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var myProducts = request.response;
  for(var i = 0; i < 2; i++){
    document.getElementById("product-name" + i).innerHTML = myProducts[i]['name'];
    document.getElementById("product-img" + i).src = myProducts[i]['picture'];
  }
}


// let json = require('products.json');

// var myProduct = JSON.parse(json);
// document.getElementById("product-name").innerHTML = myProduct[0]['name'];
// document.getElementById("product-name").innerHTML = data[0]['name'];