const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const data = {
        email: formulario.correo.value,
        country: formulario.pais.value,
        donation: formulario.donacion.value,
        date: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked,
    };

    //Comprobar correo
    if(!expresionRegular.test(data.email)){
        console.log('Correo invalido');
        return;
    }
});