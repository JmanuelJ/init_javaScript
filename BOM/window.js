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
const abrirVentana = () => {
    window.open('https://www.google.com', 'Mi nueva ventana');
}
