class User {
    constructor(user, password){
        this.user = user
        this.password = password;
    }

    getPost(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Admin extends User {
    constructor(user, password, permisos){
        super(user, password);
        this.permisos = permisos;
    }

    deletePost(id) {
        if(this.permisos.includes('delete')){
            console.log(`El post con el ${id} ha sido eliminado`);
        } else {
            console.log('No tienes los permisos para borrar este post');
        }
    }
}

const usuario = new User('Juan', '123');
console.log(usuario.getPost());
const usuario2 = new Admin('Manuel', '567', ['delete', 'edit']);
console.log(usuario2.getPost());
console.log(usuario2.permisos);
usuario2.deletePost(1);
