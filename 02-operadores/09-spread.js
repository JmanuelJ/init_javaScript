//operador spread permite tomar los elemenos un arreglo y expandirlos en otro sitio

const frutas = ['uva', 'melon','banana'];
const comida = ['pizza', ['tacos',...frutas]];
console.log(comida);

const loginInfo = {
    email: 'ejemplo@gmail.com',
    password: '123',
}

const usuario = {
    userName: 'Arturo',
    ...loginInfo,
    age: 28,
}
console.log(usuario);

//parametros rest permite que una funcion tenga un numero indefinido de argumentos 

const userRegister = (name, email,...extra) => {
    console.log(name, email);
}

userRegister('Juan', 'ejemplo@gmail.com', '28', 'Mexico');

//Destructuracion de elementos nos permite obtener elementos o propiedades de un arreglo y guardarlos en una variable
//Arreglos
const amigos = ['Alex', 'Carlos', 'Juan'];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo, segundoAmigo, tercerAmigo);

const {userName, age} = usuario;
console.log(userName, age);

