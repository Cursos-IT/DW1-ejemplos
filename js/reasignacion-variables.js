const a = 7;
a = 8;  // reasignación

console.log(a);// TypeError: Assignment to constant variable.


let b = 7;  // mismo resultado para var a = 7
b = 9;

console.log(b); // 9   var y let pueden ser reasignadas