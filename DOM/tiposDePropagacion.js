//Bubbling (false, por defecto)
//El evento del elemento hjio reacciona primero y despues el evento del elemento padre.

// const contenedor = document.getElementById('contenedor1');

// contenedor.addEventListener('click', (e) => {
//     console.log('Hiciste click en el contenedor');
// }, false); //Por default el valor que tiene es false

// const primeraCaja = document.querySelector('.caja');

// primeraCaja.addEventListener('click', (e) => {
//     console.log('Hiciste click en la caja1'); 
// });


//Capturing (true)
//El el evento del elemento padre reacciona primero y despues el del elemento hijo

const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
}, true);

const primeraCaja = document.querySelector('.caja');

primeraCaja.addEventListener('click', (e) => {
    console.log('Hiciste click en la caja1'); 
});