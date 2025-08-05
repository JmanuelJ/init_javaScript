
function precioCompleto(precio, impuesto){
    let total = 0; 

    return precio + (precio * impuesto);
}

let resultado = precioCompleto(19.90, 0.15);

console.log(resultado);
