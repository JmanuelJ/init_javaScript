//Alerta para informar al usuario de algo
//alert('Hola usuario');

// Ventana de confirmación
//Ventana donde el usuario puede aceptar o canelar. Retorna true o false, dependiendo de la respuesta de usuario.
// const ingresar = () => {
//     const accesoPermitido = confirm('¿Eres mayor de edad?');

//     if(accesoPermitido){
//         alert('¡Bienvenido!');
//     } else {
//         alert('Le vamos a decir a tus padres');
//     }
// }

const saludo = () => {
    const name = prompt('Escribe un nombre');
    alert(`Bienevenido ${name}`);
}