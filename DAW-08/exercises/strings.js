// Ejercicio a:
var stringA = "Hola Mundo! Esta es la clase 8 de DAW";
var toUpperCase = stringA.toUpperCase();

// Ejercicio b:
var stringB = "Programando en JavaScript";
var first5 = stringB.substring(0, 5);

// Ejercicio c:
var stringC = "Desarrollando frontend";
var last3 = stringC.substring(stringC.length - 3, stringC.length);

// Ejercicio d:
var stringD = "javascript";
var capital = stringD.substring(0, 1).toUpperCase() + stringD.substring(1).toLowerCase();

// Ejercicio e:
var stringE = "Hola Mundo";
var espacio = stringE.indexOf(' ');

// Ejercicio f:
var stringF = "programación desarrollo";
var firstSpaceIndex = stringF.indexOf(' ');
var firstWord = stringF.substring(0, firstSpaceIndex);
var secondWord = stringF.substring(firstSpaceIndex + 1);

var formattedFirstWord = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1).toLowerCase();
var formattedSecondWord = secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1).toLowerCase();

var resultado = formattedFirstWord + " " + formattedSecondWord;
