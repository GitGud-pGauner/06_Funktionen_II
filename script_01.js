
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : erledigt!
*/

// module: addition a + b |  test:

output(add(2,2));
output(add(2,-2));
output(add(2,0));

function add(a , b) {
let c = a + b;	
return a + b;	
}

// module: substract a - b |  test:

output(substract(2,2));
output(substract(4,-2));
output(substract(2,0));

function substract(a , b) {
let c = a - b;	
return a - b;
}

// module: multiply a * b |  test:

output(multiply(2,2));
output(multiply(2,-2));
output(multiply(2,0));

function multiply(a , b) {
let c = a * b;
return a * b;
}

// module: divide a / b |  test:

output(divide(2,2));
output(divide(2,-2));
output(divide(2,0));

function divide(a , b) {
let c = a / b;
return a / b;	
}







// 4. module: output | test:
function output(outputData) {
	console.log(outputData);
}
