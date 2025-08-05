let user = {
    id: 1,
    email: 'juanMa@gmail.com',
    name: 'Juan',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');

    }
}

function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name: name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');

        }
    }
}

let user1 = crearUsuario('Juan', 'juan@gmail.com');
let user2 = crearUsuario('Manuel', 'manuel@gmail.com')

console.log(user1);
console.log(user2);
