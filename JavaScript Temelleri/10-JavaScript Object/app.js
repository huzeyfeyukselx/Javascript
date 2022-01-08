let value;

const personCord={
    name : "Huzeyfe",
    surname : "Yüksel",
    age : 27,
    email : "huzeyfeyukselx313@gmail.com",
    address : {
        city : "Sivas",
        street : "İstasyon"
    },
    workStatus : function (){
        return (" Is Working...");
    }
}

console.log(personCord);

value = personCord.name;
console.log(value); // out : Huzeyfe

value = personCord.address.city;
console.log(value); // out : Sivas

value = personCord.workStatus();
console.log(value); // out : Is Working...


const personnels =[
{name : "Huzeyfe", surname : "Yüksel",},
{name : "Serdar", surname : "Ateş",}, 
]
