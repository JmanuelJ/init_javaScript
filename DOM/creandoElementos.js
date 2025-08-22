const addBox = () => {
    //Creamos el elemento
    //1.-createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos CredentialsContainer.
    const nuevaCaja = document.createElement('div');

    //2.- Agregamos texto y atributos
    nuevaCaja.innerText = 'New box';
    //nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    //3.-Agregar elemento al DOM
    const contenedor = document.getElementById('contenedor1');
    
    //appendChild() - Agrega un elemento al final
    contenedor.appendChild(nuevaCaja);

    //insertAdjacentsElement() - Nos permite agregar un elemento
    /* Valores: 
    afterbegin() - como primer elemento
    beforebegin() - antes del elemento padre
    beforeend() - como ultimo elemento 
    afterend() - despues del elemento padre
    */
   //contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
   //contenedor.insertAdjacentElement('beforebegin', nuevaCaja);
   //contenedor.insertAdjacentElement('beforeend', nuevaCaja);
   //contenedor.insertAdjacentElement('afterend', nuevaCaja);

   //replaceWith() - Nos permite remplazar el elemento por otro
   document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}