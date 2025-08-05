const user = { id: 1};

user.name = 'Juan';
user.guardar = function () {
    console.log('Guardando', user.name);
    
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.freeze ({id: 1});
user1.name = 'Juan';
user1.id = 2;
console.log(user1);

const user2 = Object.seal({ id: 1});
user2.id = 2;
user2.name = 'Juan';
console.log(user2);


