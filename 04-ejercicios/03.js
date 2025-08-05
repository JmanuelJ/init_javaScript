function getbyIdx(arr, idx) {
    /*if(idx < 0){
        return 'Elemento no existe'
    }

    if(idx > arr.length -1){
        return 'Indice no valido'
    } else {
        return arr[idx];
    }*/

    if(idx < 0 || arr.length <= idx){
         return 'Elemento no existe'
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2],1);

console.log(resultado);