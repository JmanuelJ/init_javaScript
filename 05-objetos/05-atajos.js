let obj = {};


function Usuario () {
    this.name = 'Chanchto Feliz'
}
let user = new Usuario();

console.log(user.constuctor);

const s1 = '1+1';
const s2 = new String('1+1');

console.log(s1, s2);

console.log(eval(s1), eval(s2))

console.log(s1.valueOf(), s2.valueOf())

