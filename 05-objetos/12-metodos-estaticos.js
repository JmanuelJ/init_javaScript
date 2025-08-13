class User {
    constructor(user, age){
        this.user = user
        this.age = age;
    }

    static deleteUser(id) {
        console.log(`El usuario con el id ${id} ha sido eliminado de la DB`);
    }

    static registers = 1000;
}

// const usuario = new User('Juan', 22);
// usuario.deleteUser(1);
User.deleteUser(1);
console.log(User.registers);
