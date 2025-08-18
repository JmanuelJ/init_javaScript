//Conocer el tamaño de la ventana de mi navegador

console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

//Windows.open()
/* Nos permite abrir ventanas del navegador.
Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.
-1er parametro: Dirección de la nueva ventana.
-2do parametro: Nombre de la ventana.
-3er parametro: Cadena d etexto de opciones.

Nos devuelve un objeto para acceder a esa ventana
*/
// const openWindow = () => {
//     window.open('https://www.google.com', 'Mi nueva ventana', "width=500, height=500");
// }

let ventana;
const openWindow = () => {
    ventana = window.open('', 'Mi nueva ventana', "width=500, height=500");

    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana</h1>');
}

const closeWindow = () => {
    ventana.close();
}

/*
Screen object 
Representa la pantalla del usuario
 */

console.log('Ancho de pantalla', window.screen.width);
console.log('Alto de pantalla', window.screen.height);

console.log('Ancho de pantala sin barra de windows', window.screen.availWidth);

console.log('Alto de pantala sin barra de windows', window.screen.availHeight
);


