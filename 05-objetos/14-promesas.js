const promise = new Promise((resolve, reject) => {
    //Accion que se ejecutara.
    setTimeout(() => {
        const success = false;

        if(success){
            resolve('La operación tuvo exito');
        } else {
            reject('La operación no tuvo exito')
        }
    }, 4000);
});

//se ejecuta en caso de la promesa sea exitosa 
promise.then((message) => {
    alert(message);
});

//se ejecuta en caso de la promesa sea exitosa 
promise.catch((message) => {
    alert(message);
})