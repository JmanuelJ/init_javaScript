let animales = ['chanchito', 'cabllo'];

console.log(animales);

console.log(animales[0]);

animales[2] = 'dragon';
console.log(animales);

console.log(typeof animales);
//imprimir tamaño del arreglo
console.log(animales.length);

const ejemplo = [uva, manzana, platano]
//Imprimir arreglo separado por signo
console.log(ejemplo.join('+'))

const ejemplo2 = ['c' , 'b', 'a', 'd']
//Imprimir arreglo ordenado
console.log(ejemplo2.sort());

//Imprimir arreglo de forma descendiente
console.log(ejemplo2.reverse());

//Concatenar arreglos
const ejemplo3 = ejemplo.concat(ejemplo2);

//Agregar un nuevo objeto al final del arreglo
ejemplo.push('melon')

//Eliminar el ultimo objeto del arreglo
ejemplo.pop();

//Eliminar el primer elemento y recorrer el arreglo
ejemplo.shift();

//Agregar un elemento al inicio del arreglo y recorre a los demas
ejemplo.unshift('pera');

//eliminar elementos en cualquier posicion del arreglo y sustituirlos por otros
ejemplo.splice(1, 2, 'naranja', 'piña');

//Copiar arreglo definiendo el inicio y fin.
const ejemplo4 = ejemplo.slice(1,2);

//Objeter el index de un elemento en un arreglo, si no existe devolvera -1

const index = ejemplo.indexOf('manzana');

//Obtener el index del ultimo elemento del arreglo

const index2 = ejemplo.lastIndexOf('manzana'); 

//Ejecutar una funcion por cada elemento que tenemos dentro del arreglo

ejemplo.forEach((nombre) => {
    console.log(`Hola ${nombre}`);
})




