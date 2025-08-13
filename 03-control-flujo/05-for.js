
for(let i = 2; i < 10; i++){
    if(i % 2 == 0) {
        console.log('Numero par:', i);
        
    }
}

const names = ['Alex', 'Carlos', 'Juan'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//for in, nos permite recorrer la propiedades de un objeto

const user = {
    userName: 'Arturo',
    email: 'ejemplo@gmail.com',
    password: '123',
    age: 28,
};

for(propiedad in user) {
    user[propiedad] = '';
}
console.log(user);

//For of, nos permite recorrer los valores de un objeto iterable
//Podemos recorrer: Arreglos, cadenas de texto, mapas, listas y nodos, etc.

const labels = document.head.children;

for(elemento of labels){
    console.log(elemento);
}

[...labels].forEach((elemento) => {
    console.log(elemento);
})
