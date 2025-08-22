
/*Crear un objeto de fecha 
Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.*/

const date = new Date();
console.log(date);

const birthdayDate = new Date('1996-06-18T12:00:00');
console.log(birthdayDate);

//Metodos para trabjar con fechas
console.log(date.toISOString());
console.log(date.toDateString());
console.log(date.toLocaleTimeString());

//obtener mes
console.log(date.getMonth());
//obtener dia
console.log(date.getDate());
//obtener el año
console.log(date.getFullYear());





