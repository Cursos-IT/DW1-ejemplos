// a = 5;
// b = " hola";

// console.log(a);
// console.log(b);
// console.log(a, b);

// agregar varios "console.log(a, b);"  y mostrar la facilidad de cambiar todos los valores cambiando los valores de las variables

// const a = 7;
// const a = 8;

// console.log(a);

if(true){
    const saludo = "Hola Universo";
    saludo = "Hola Mundo";	
    console.log(saludo); // Hola mundo
}

let arrays = [1,2,3]
for (const index = 0; index < arrays.length; index++) {
    const element = arrays[index];
    console.log(element);  /* TypeError: Assignment to constant variable. */
    
}

var arrays = [1,2,3]
var index;
for (index = 0; index <= arrays.length; index++) {
    var element = arrays[index];
    console.log(index);  /* 0 1 2 3 */
}
console.log(index);  /* 4 */

var arrays = [1,2,3]
for (var index = 0; index <= arrays.length; index++) {
    var element = arrays[index];
    console.log(index);  /* 0 1 2 3 */
}
console.log(index);  /* 4 */

let arrays = [1,2,3]
for (let index = 0; index <= arrays.length; index++) {
    console.log(index);  
}
console.log(index);  /* error */


let arrays = [1,2,3]
for (let index = 0; index <= arrays.length; index++) {
    console.log(index);  /* 0 1 2 3 */
}


const a = 7;
a = 9;

console.log(a); // TypeError: Assignment to constant variable.


let a = 7;
var a = 9;

console.log(a); // SyntaxError: Identifier 'a' has already been declared


// var a = 7;
// var a = 9;

// console.log(a); // 9


if(true){
    var saludo = "Hola Mundo"; 
}

console.log(saludo);