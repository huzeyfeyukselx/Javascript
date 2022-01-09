//--------------------------------------
// While Loop

let i=0;
while(i<10){
    console.log(i);
    i++; // i+=1; / i =i+1;
} // out : 1 2 3 4 5 6 7 8 9

//--------------------------------------
// BREAK

i=0;
while(i<10){
    console.log(i); 
    if(i==5){
        break;
    }
    i++; 
} // out : 1 2 3 4 5

//--------------------------------------
// CONTINUE

i=0;
while(i<10){ 
    if(i==3 || i==5){
        i++; 
        continue;
    }
    console.log(i);
    i++;    
} // out : 1 2 4 6 7 8 9

//--------------------------------------
// DO WHILE

i=0;
do{
    console.log(i);
    i++;
}while(i<10);

//--------------------------------------
// FOR

const language=["Java","C++","C#"];
for(let i=0;i<language.length;i++){
    console.log(language[i]);
}

//--------------------------------------
// FOREACHE

language.forEach(
    function(item,index){
        console.log(item+ " index : "+index);
    }
);

//--------------------------------------
// MAP

const users=[
    {name : "Huzeyfe", age :27 },
    {name : "Hasan", age :55 },
    {name : "Huseyn", age :46 },
];

const names = users.map(function(user){
    return user.name;
});

console.log(names);

//--------------------------------------
// FOR IN

const user ={
    name : "Huzeyfe",
    surname : "Yüksel",
    age : 27
};

for(let key in user){
    console.log(key);
} // out : name surname age

for(let key in user){
    console.log(key+" : "+user[key]);
} // out : name : Huzeyfe surname : Yüksel age : 27