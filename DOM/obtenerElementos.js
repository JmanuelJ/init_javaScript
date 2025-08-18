//getElementById() Nos permite obtenber un elemnto en base a sus atributo id
// const contenedor1 = document.getElementById('contenedor1')
// console.log(contenedor1);

// //Children - Nos permite obtener los elementos hijo 
// console.log(contenedor1.children);

// //parentElement
// console.log(contenedor1.parentElement);

// getElementsByTagName - Nospermite obtener la coleccion de elementos en base a la etiqueta.
//Nota: Devuelve una coleccion HTML. Una coleccion no es un array.
// const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(`Tenemos ${divs.length} divs en la pagina`);

// //getElementsByClassName - Nos permite obtener una coleccion de elemntos en base a su clase css.
// //Nota: Devuelve  una coleccion HTML
// const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);

//querySelector - Nos devuelve el primer elemento que coincida con un selector de estilo css.
//Nota: Devuelve un nodeList.
// const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);

// //querySelectorAll - Nos permite obtener una coleccion de elementos en base a un selector de estilo css.
// //Nota: Devuelve un nodeList.
// const cajas = document.querySelectorAll('#contenedor1 .caja');
// console.log(cajas);

// cajas.forEach((caja) => {
//     console.log(caja);
// });

//closest - Nos permite buscar de adntro hacia afuera un elemento

// const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
// console.log(ultimaCaja);
// console.log(ultimaCaja.closest('.contenedor-principal'));

//Podemos encadenar todos los metodos para obtener elementos.
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja'));

