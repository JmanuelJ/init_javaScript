class User {
    tipo = 'user'

    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;

        console.log('Nuevo usuario registrado!');
    }

    getName(){
        console.log('Obteniendo datos...');
        return `${this.name} ${this.lastName}`
    }
}

const usuario = new Usuaro('Juan', 'Juarez');
console.log(usuario.getName());

const usuario2 = new Usuaro('Manuel', 'Perez');
console.log(usuario2.getName());
