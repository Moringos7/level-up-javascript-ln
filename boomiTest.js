let seriales = "A,B,C";
let serialArrays = seriales.split(",");

const result =  serialArrays.map( (serial) => {
  return "<item><item><name>"+serial+"</name></item><quantity>"+1+"</quantity></item>"
}).join('');
//`<itemList>
//</itemList>`
var newResult = ""
for (var i = 0; i < serialArrays.length; i++) {
  newResult += "<item><item><name>"+serialArrays[i]+"</name></item><quantity>"+1+"</quantity></item>"
}
console.log(result == newResult);
//console.log(newResult);