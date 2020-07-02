/////////////1º

if (3 < 4) {
    console.log("3 es menor que 4");
}


let edad = 17; 
if (edad >= 18) {
    console.log("Puede pasar");
} else {
    console.log("Prohibido pasar menores");
}

// en funciones:

function miFuncion(edad) {
    console.log("Bienvenido");    
    if (edad >= 18) {
        console.log("Puede pasar");
    }
}

miFuncion(18)




/////////////2º

// Declaración "else" Indica el código que se ejecutará si la condición es falsa.

function miFuncion(edad) {
    console.log("Bienvenido");    
    if (edad >= 18) {
        console.log("Puede pasar");
    } else {
        console.log("Prohibido para menores");
    }
}

miFuncion(15)