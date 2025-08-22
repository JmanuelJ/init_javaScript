const endPoint = 'https://api.npoint.io/b34508deaabc67486ba5';

// fetch(endPoint)
// .then((response) => {
//     console.log('El servidor respondio');
    
//     const promesa = response.json();

//     promesa.then((datos) => {
//         console.log(datos);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
    
// })
// .catch((error) => {
//     console.log(error);
    
// });

//Ejempĺo con Async/Await

const obtenerDatos = async () => {
    const response = await fetch(endPoint);
    console.log(response);
    const datos = await response.json();

    console.log(datos); 
};

obtenerDatos();