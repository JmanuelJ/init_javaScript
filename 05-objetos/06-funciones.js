function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Juan');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg)
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned(){
    return function () {
        console.log('Hola Mundo');
        
    }
}

let saludo = returned();

saludo();

const hola = function () {
    console.log('Funcion desde variable');
    
}

const holaa = () => console.log('Hola');
