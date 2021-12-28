//Primitive

var _number=10;
console.log(typeof _number);      // out : number

var _string="Bu bir yazıdır."; 
console.log(typeof _string);      // out : string

var _boolean=true;
console.log(typeof _boolean);     // out : boolean

var _null=null;
console.log(typeof _null);         // out : object

var _undefined;
console.log(typeof _undefined);    // out : undefined



//Reference Data Type


var _numbers = [1,2,3,4,5,6];
console.log(_numbers);    // out : (6) [1, 2, 3, 4, 5, 6]
console.log(typeof _numbers);    // out : object



var _person = {
    name : "Huzeyfe",
    surname : "YÜKSEL",
    date : 1994
}
console.log(_person);    // out :  {name: 'Huzeyfe', surname: 'YÜKSEL', date: 1994}
console.log(typeof _person);    // out : object


var _date = new Date();
console.log(_date);    // out : Tue Dec 28 2021 19:00:39 GMT+0300 (GMT+03:00)
console.log(typeof _date );    // out : object


var _function = function (){
    console.log("Function!");
}
console.log( _function );    // out : ƒ (){console.log("Function!");}
console.log( typeof _function );    // out : function

//------------------------------
// What is the reference?

var a=10;
var b= a;
console.log(a,b); // out : 10 10
a=15;
console.log(a,b); // out : 15 10

var c = [1,2,3];
var d=c;
c.push(4);
console.log(d); // out : (4) [1, 2, 3, 4]