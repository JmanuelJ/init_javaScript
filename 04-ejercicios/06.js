let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let total = 0;

    for(numero of arr){
        if(numero > 0) total ++
    }

    return total;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
