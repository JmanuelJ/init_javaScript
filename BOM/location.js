//Location es de tipo global, por lo tanto podemos acceder a el desde cualquier parte.
//href- Retorna un url de la página actual
console.log(location.href);

// Hostname - Retorna el host de la pagina actual
console.log(location.hostname);

//pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

//protocol - Retorna le protocolo utilizado
console.log(location.protocol);
 
const changeDocument = () => {
    location.assign('https://www.google.com');
}

//back te regresa a la pagina anterior
const back = () => {
    history.back();
}

//forward te permite ir un apgna hacia adelante

const go = () => {
    history.forward();
}


