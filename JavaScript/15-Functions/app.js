
function getInfo(name ="Nothing",age ="Nothing"){
    console.log(`Name : ${name} / Age : ${age}`)
}

getInfo("Huzeyfe"); // out : Name : Huzeyfe / Age : Nothing
getInfo("Huzeyfe",27); /// out : Name : Huzeyfe / Age : 27

// --------------------------------------

// Function Expression

const getInfo2= function(name){
    console.log("Hello "+ name+" !");
}
getInfo2("Huzeyfe"); // out : Hello Huzeyfe !

// --------------------------------------

// Immediately Invoked Fınction Expression (IIFE)

(function(name){
    console.log("Hello "+ name+" !");
})("Huzeyfe"); // out : Hello Huzeyfe !

// --------------------------------------

const databaseInfo={
    hostname: "localhost",
    //Methods
    add: function(){
        console.log("The Object Added!")
    },
    get: function(id){
        console.log("The Object Getted!")
    },
    update: function(id){
        console.log("The Object Updated!")
    },
    delete: function(id){
        console.log("The Object deleted!")
    }
}

console.log(databaseInfo.hostname); // out : localhost
databaseInfo.get(); // out : The Object Getted!