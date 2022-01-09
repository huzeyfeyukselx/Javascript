let value;

const firsname = "Huzeyfe";
const lastname = "YÜKSEL";

value = firsname+lastname;
console.log(value); // out : HuzeyfeYÜKSEL

value = firsname + " " + lastname;
console.log(value); // out : Huzeyfe YÜKSEL

value="Name-Surname : ";
value += firsname + " " + lastname;
console.log(value); // out : Name-Surname : Huzeyfe YÜKSEL
console.log(value.length); // out : 29


value="Name-Surname : ";
value = value.concat(firsname," ",lastname);
console.log(value); // out : Name-Surname : Huzeyfe YÜKSEL

value = firsname.toUpperCase();
console.log(value); // out : HUZEYFE

value = firsname.toLocaleLowerCase();
console.log(value); // out : huzeyfe

value = firsname[0]; // [H(0),u(1),z(2),e(3),y(4),f(5),e(6)]
value = firsname.charAt(0);
console.log(value); // out : H 


let lessons="C#,C++,Java";
value = lessons.split(",");
console.log(value); // out : ["C#","C++","Java"]

let lessons="C#,C++,Java";
value = lessons.replace("Java","Python");
console.log(value); // out : C#,C++,Python

let lessons="C#,C++,Python";
value = lessons.includes("Java")
console.log(value); // out : false

