const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', () => {
    primeraCaja.classList.toggle('activa');
});

//Agregando el evento a multiples elementos 
//Podemos agregar el evento a mutiples elementos recorriendolos mediate un ciclo.
//Nota: No es la forma más optima.
const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
    });
});