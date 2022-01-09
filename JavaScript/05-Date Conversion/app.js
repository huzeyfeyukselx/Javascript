let value;

//-------------------------------------------
//to string 

value=55;
console.log(typeof value);     //(+) out : number
value=String(value);           //(+) value.toString();
value=String(3.14);            //(+) (3.14).toString();
value=String(true);            //(+) (true).toString();
value=String([1,2,3]);         //(+) out : [1,2,3]  // ([1,2,3]).toString();
value=String(function(){console.log("Function!")}); //(+) out : function(){console.log("Function!")}
console.log(value);
console.log(typeof value);     // out : string

//-------------------------------------------
//to number

value="55";
console.log(typeof value);      // out : string
value=Number(value);            //(+) parseInt(value);
value=Number("3.14");           //(+) parseFloat("3.14");
value=Number(null);             //(+) out : 0 
value=Number(undefined);        //(-) out : NaN 
value=Number("Hello World!");   //(-) out : NaN 
value=String([1,2,3]);          //(-) out : NaN 

value = parseFloat("3.14");
value = parseInt("35");

value=Number(function(){console.log("Function!")});      //(-) out :  NaN 
console.log(value);
console.log(typeof value);      // out : string

//######

const a ="Hello "+ 34;
console.log(a);                // out : Hello 34
console.log(typeof a);         // out : string

const b ="58 "+ 34;
console.log(b);                // out : 58 34
console.log(typeof b);         // out : string

const c = Number("58 ")+ 34;
console.log(c);                // out : 92
console.log(typeof c);         // out : number
