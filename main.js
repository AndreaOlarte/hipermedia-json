var indexProducts = 0;

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

request.onload = setProductsOnPage;

function setProductsOnPage() {
  var myProducts = request.response;
  for(var i = 0; i < 28; i++){
    document.getElementById("product-name" + i).innerHTML = myProducts[(28 * indexProducts + i)]['name'];
    document.getElementById("product-img" + i).src = myProducts[(28 * indexProducts + i)]['picture'];
    document.getElementById("product-alt-img" + i).src = myProducts[(28 * indexProducts + i)]['alternative-pic'];
    document.getElementById("product-price" + i).innerHTML = "$" + myProducts[(28 * indexProducts + i)]['price'];
  }
}


function changeIndex(index){
  indexProducts = index;
  // request.onload = setProductsOnPage;
  // location.reload(true);
  request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  
  request.onload = setProductsOnPage;
}