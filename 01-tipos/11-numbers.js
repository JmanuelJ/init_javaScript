// toString, transformar numero a cadena de texto
const number = 10;
console.log(number.toString());

//toFixed, obtener un numero con la cantidad de decimales especificada 
const numero = 3.1416;
console.log(numero.toFixed(2));

//parseInt Intenta tranfomrar un valor a entero
const numberOne = parseInt('1');
const numberTwo = parseInt('3');

console.log(numberOne + numberTwo);

//parseFloat Intenta tranfomrar un valor a valor con decimales
const number1 = parseInt('1.25');
const number2 = parseInt('3.78');

console.log(number1 + number2);

//Math.random() genera un rumero aleatorio de entre 0 y 1
console.log(Math.random());

//Math.floor() redondea un numero hacia abajo
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));

//Math.ceil() redondea un numero hacia arriba
console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));

//Math.round() redondea numero hacia el entero más cercano

console.log(Math.round('10.1'));
console.log(Math.round('10.99'));

//numero aleatorio del 0 al 100
const numberRandom = Math.random();
console.log(Math.floor(numberRandom * 101));
