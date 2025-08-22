//Modificar estilos css mediante "inline styles".

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');

ultimaCaja.style.background = '#000'
ultimaCaja.style.color = '#FFF'

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () => {
    cajas.forEach((caja) => {
        tamaño++;
        caja.style.fontSize = `${tamaño}px`
    });
};
const decrementarFuente = () => {
    cajas.forEach((caja) => {
        tamaño--;
        caja.style.fontSize = `${tamaño}px`
    });
};
