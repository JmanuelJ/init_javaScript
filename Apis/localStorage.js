document.getElementById('boton1').addEventListener('click',() => {
    const name = prompt('Escribe tu nombre');
    window.localStorage.setItem('user', name);
});

document.getElementById('boton2').addEventListener('click',() => {
    window.localStorage.removeItem('user');
});


if(window.localStorage.user){
    console.log('Hola ', window.localStorage.user);
} else {
    console.log('Hola usuario anonimo');
    
}