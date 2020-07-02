
// function myFuncion() {
//     return 3 + 4;
// }

// console.log(myFuncion()); // 7



function myFuncion(a, b) {
    return a + b;  
}

// let myFuncion = function (a, b) {
//     return a + b;  
// }

//invocación:
console.log(myFuncion(3, 4));   // 7


function myFuncion() {
    alert("Hola Mundo");
}

console.log(myFuncion());


//  arrow functions

// sintaxis
let mifuncion = () => {
   //código de la función
}

// parámetros
let nombreFuncion = (importe) => {
   console.log("total", importe)
}

nombreFuncion(300)  //total 300

// or (unicamente si es un solo parámetro)
let nombreFuncion = importe => {
   console.log("total", importe)
}

nombreFuncion(300)  //total 300

// sin llaves (unicamente si es una sola linea de código)
let nombreFuncion = importe => console.log("total", importe)


nombreFuncion(300)  //total 300


// podemos obviar la palabra clave "return"
let myFuncion = (a,b) => a + b;

// sería lo mismo que
// function myFuncion(a, b) {
//     return a + b;  
// }

//invocación:
console.log(myFuncion(3, 4));   // 7