//Buscar valor en una cadena y devuelve el index del primer/ultimo caractaer especificado
/*const texto = 'Hola soy Juan Manuel';
console.log(texto.indexOf('o'));
console.log(texto.lastIndexOf('o'));*/


//Obtener un fragmento de una cadena de texto
const texto = 'Hola soy Juan Manuel';
const index = texto.indexOf('o');
const lastIndex = texto.lastIndexOf('o');
console.log(texto.slice(index));
console.log(texto.slice(lastIndex));

//Devolver una cadena de texto donde se replaza un valor por otro
const res = texto.replace('Juan', 'Pedro');
console.log(res);

///Trasformar una cadena en arreglo
const resul = texto.split(' ');
console.log(resul);

