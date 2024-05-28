// Ejercicio a:
var palabras = ["java", "sql", "typescript", "html", "assambler"];
for (var i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}

// Ejercicio b:
for (var i = 0; i < palabras.length; i++) {
  var capitalizedWord = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  alert(capitalizedWord);
}

// Ejercicio c:
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert(sentence.trim());

// Ejercicio d:
var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push(i);
}
console.log(numbers); 