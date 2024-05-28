// Ejercicio a:
function suma(a, b) {
    return a + b;
  }
  
  var resultado = suma(5, 3);
  console.log(resultado); 

// Ejercicio b:
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    return a + b;
}

let resultado = suma(5, '3');
console.log(resultado); 

// Ejercicio c:
function validateInteger(num) {
    return Number.isInteger(num);
}

var trueInt = validateInteger(5);
var falseInt = validateInteger(5.5);

// Ejercicio d:

function suma2(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    
    if (!validateInteger(a)) {
        alert('El primer parámetro no es un entero, se redondeará');
        a = Math.round(a);
    }
    
    if (!validateInteger(b)) {
        alert('El segundo parámetro no es un entero, se redondeará');
        b = Math.round(b);
    }
    
    return a + b;
}


let resultado = suma(5.7, 3.3);

// Ejercicio e:
function suma(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    
    a = validateAndRound(a);
    b = validateAndRound(b);
    
    return a + b;
}

function validateInteger(num) {
    return Number.isInteger(num);
}

function isValidNumber(num) {
    return typeof num === 'number';
}

function validateAndRound(num) {
    if (!validateInteger(num)) {
        alert(`El número ${num} no es un entero, se redondeará`);
        return Math.round(num);
    }
    return num;
}

let resultado = suma(5.7, 3.3);





  

  