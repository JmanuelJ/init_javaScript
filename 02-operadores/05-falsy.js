//Short-circuit

//Falso
//false, 0, '', null, undefine, Nan
let nombre = 'Chanchito feliz';
let userName = nombre || 'Anonimo';

console.log(userName);

function fn1(params) {
    console.log('Soy funcion 1');
    return true;
}

function fn2(params) {
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();