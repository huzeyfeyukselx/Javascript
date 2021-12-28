//-------------------------------------------------
// VAR:

var name = "Huzeyfe"; // (+)
var name = "Hamza"; // (+)
console.log(name); // out : Hamza

//-------------------------------------------------
// LET:

let surname = "YÜKSEL"; // (+)
surname="SİVASLI"; // (+)
let surname = "YILDIZ"; // (-)
console.log(surname); // out : (Error)  Identifier 'surname' has already been declared

//-------------------------------------------------
// CONST:

const age =27; // (+)
age=30 // (-) out : (Error) Assignment to constant variable.
var age = "Hamza"; // (-)
console.log(age); // out : (Error) Identifier 'age' has already been declared

//#########

const year; // (-)
year=1994; // (-)
console.log(year); // out : Missing initializer in const declaration

//#########

const list=[1,2,3];
list =[1,2,3,4]; // (-) list tekrardan oluşturulacağı ve ilk tanımlandığındaki adres değeri değişeceğinden hatadır.
console.log(list); // out : Assignment to constant variable
list.push(4); // (+) list referans tutuğundan ve gösterdiği adres değişmediğinden ekleme ve çıkarma yapılabilir.
console.log(list); // out : (4) [1, 2, 3, 4]

//-------------------------------------------------