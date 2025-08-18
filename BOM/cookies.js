//Crar cookie
// const createCookie = () => {
//     document.cookie = 'nombre=Juan';
// }

//Crear cookie con fecha de expiracion
// const createCookie = () => {
//     console.log('Creando cokie...');
//     document.cookie = 'nombre=Jua';
//     document.cookie = "nombre=Juan; expires=Mon,18 Aug 2025 11:58:00 UTC";
//     // 
// }

const iniciarSesion = () => {
    const usuario = prompt('Usuario:');
    document.cookie = `nombre=${usuario}; expires=Mon, 18 August 2025 12:24:00 UTC;`;
    alert('Sesión iniciada');
}