
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

// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a , b) {
let c = a + b;	
return a + b;	
}

// module: substract a - b |  test:

// output(subtract(2,2));
// output(subtract(4,-2));
// output(subtract(2,0));

function subtract(a , b) {
let c = a - b;	
return a - b;
}

// module: multiply a * b |  test:

// output(multiply(2,2));
// output(multiply(2,-2));
// output(multiply(2,0));

function multiply(a , b) {
let c = a * b;
return a * b;
}

// module: divide a / b |  test:

output(divide(2,2));
output(divide(2,-2));
output(divide(2,0));

function divide(a , b) {

	if (b !=0) {
		return a/b;
	} else {
		return "Teilen durch 0 nicht möglich";
	}
}




// 4. module: output | test:
function output(outputData) {
	console.log(outputData);
}
