//Window.setTimeOut() Nos permite ejecutar una funcion despues de cierto tiempo
// const saludo = () => {
//     console.log('Hola que tal!');
// } 

// let id;

// const init = () => {
//     console.log('Iniciando timer...');

//     id = setTimeout(saludo, 5000);
// }

// const stop = () => {
// console.log('Parando timer...');
// clearTimeout(id);
// }

// Window.setInterval() Nos permite ejecutar una funcion cada cierto tiempo.

let cuenta = 0;
let id;

const init = () => {
    console.log('Iniciando cuenta...');
    
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
}

const stop = () => {
    console.log('Deteniendo cuenta');
    clearInterval(id);
    cuenta = 0;
}
