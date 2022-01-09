let name = "Huzeyfe";
let surname = "Yüksel";
let age= 27;

//------------------------------------------------------

//(1)
let card = "Name : "+name+"\nSurname : "+surname+"\nAge : "+age;

console.log(card);
/*
out:

Name : Huzeyfe
Surname : Yüksel
Age : 27
*/

//(2)
let templateLiteral=`Name : ${name} \nSurname : ${surname}\nAge : ${age}`;
console.log(templateLiteral);
/*
out:

Name : Huzeyfe
Surname : Yüksel
Age : 27
*/


//------------------------------------------------------
// (1)
let html ="<ul>"+
        "<li>" + name +"</li>"+
        "<li>" + surname +"</li>"+
        "<li>" + age +"</li>"+
        "</ul>";

console.log(html);

document.body.innerHTML=html;

// (2)

function func(){
    return "Hello";
}
html =`<ul>
             <li> ${name} </li>
             <li> ${surname} </li>
             <li> ${age} </li>
             <li> ${func()}</li>

     </ul>`;

console.log(html);
document.body.innerHTML=html;
//------------------------------------------------------