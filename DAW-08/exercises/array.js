var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Ejercicio a:
console.log(months[4]); 
console.log(months[10]);

// Ejercicio b:
var orderMonths = months.sort();
console.log(orderMonths);

// Ejercicio c:
months.unshift("Principio");
months.push("Final");
console.log(months);

// Ejercicio d:
months.shift(); 
months.pop(); 
console.log(months); 

// Ejercicio e:
var reverseMonths = months.reverse();
console.log(reverseMonths); 

// Ejercicio f:
var monthsString = months.join('-');
console.log(monthsString);

// Ejercicio g:
var monthsSlice = months.slice(4, 11);
console.log(monthsSlice); 
