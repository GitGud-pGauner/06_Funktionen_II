
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : erledigt!
3. Fkt. Grundrechenarten : erledigt!
4. Ausgabe in Konsole : erledigt!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// 1. Dateneingabe + -überprüfung:

// let input = prompt("Gib eine Zahl ein:");



startApp()
function startApp() {
	output(calculator(getNum(),getNum(),getOp()));

}

function getNum(params) {
	return parseInt(prompt("Zahl?"));
}


function getOp() {
	return prompt("Operator?");
}


// 2. module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,0,"#"));

function calculator(a,b,op) {



	switch (op) {
		
		case "+":
			return add(a,b);
		case "-":
			return subtract(a,b);
		case "*":
			return multiply(a,b);
		case "/":	
		case ":":
			return divide(a,b);

		default:
			return ERROR_STR_GEN;
		


	}
	
}








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
// output(divide(2,2));
// output(divide(2,-2));
// output(divide(2,0));

function divide(a , b) {

	if (b == 0) {
		
	
		return ERROR_STR_DIV;
	}	

	return a/b;
}




// 4. module: output | test:
function output(outputData) {
	console.log(outputData);
}
