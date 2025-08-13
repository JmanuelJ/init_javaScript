// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje ={
    nombre: "Tanjiro",// Poropiedad o llave valor
    anime: "Demon slayer",
    edad: 16
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';

personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);


const usuario = {
    nombre: 'Carlos',
    edad: 27,
    amigos: ['Alejandro', 'Cesar', 'Manuel'],
    saludo: () => {
        console.log('Hola que tal!');
    },
};

//Metodos propios
usuario.saludo();

//Devolver arreglo con las llaves del usuario
const result = Object.keys(usuario);
console.log(result);

//Devolver arreglo con los valores del usuario
const result1 = Object.values(usuario);
console.log(result1);
//Devolver pareja con la clave y el valor del objeto
const result2 = Object.entries(usuario);
console.log(result2);