let longitud = 7;

function crearArray(n) {
    if(n <= 0) {
        return [];
    }
    
    let array = [];
    for(let i = 0; i < n; i++){
        array[i] = i+1;
    }
    return array;
}

let resultado = crearArray(7);

console.log(resultado);
