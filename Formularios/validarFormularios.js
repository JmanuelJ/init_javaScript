const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        email: formulario.correo.value,
        country: formulario.pais.value,
        donation: formulario.donacion.value,
        date: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked,
    };

    //Comprobar correo
    if(data.email.length <= 2){
        console.log('Correo invalido');
        return;
    }

    //Comprobar pais
    if(data.country === '') {
        console.log('Pais invalido');
        return;
    }

    //comrpobar donacion
    if(data.donation === ''){
        console.log('Selecciona una cantidad a donar');
        return;
    }

    //comrpobar fecha
    if(data.date === ''){
        console.log('Selecciona una fecha');
        return;
    }

    //Comprobar terminos
    if(!data.terminos) {
        console.log('Acepta los terminos');
        return;
    }
});