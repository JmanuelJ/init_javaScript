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

ejemplo.forEach((nombre, index) => {
    console.log(`Persona numero ${index}: ${nombre}`);
})

//find: Hace lo mismo que foreach pero ademas puede devolver un valor.
const result = ejemplo.find((nombre) => {
    if(nombre[0] === 'u'){
        return nombre;
    }
});

console.log(result);

/*const res = ejemplo.map((nombre => {
    return nombre.toUpperCase();
}));*/

//Evalua una funcion en cada elemnto y retorna el sesultado en un nuevo arrgelo 
const res = ejemplo.map((nombre => nombre.toUpperCase()));
console.log(res);

//Podemos evaluar una funcion y si se cumplen ciertas condiciones retorna el valor en un nuevo arreglo
const result2 = ejemplo.filter((nombre => {
    if(nombre.length === 3){
        return nombre;
    }
}));
console.log(res);

//Busca un elemento en el arreglo y devuelve un boolean
console.log(ejemplo.includes('uva'));


//Evalua una condicion para todos los elementos y devuelve un boolean para confirmar si todos la cumplieron

const valid = ejemplo.every((nombre) => {
    if(typeof nombre === 'string') {
        return true;
    } else {
        return false;
    }
});

console.log(valid);

//Evalua una condicion para todos los elementos y devuelve un boolean para confirmar si alugnos la cumplieron

const valid1 = ejemplo.some((nombre) => {
    if(typeof nombre === 'string') {
        return true;
    } else {
        return false;
    }
});

console.log(valid1);






