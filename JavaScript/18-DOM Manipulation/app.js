// this -> window
// document-> All of HTML Page

console.log(document); // out : Current HTML Page
console.log(document.all); // out : Current HTML Page Collection
console.log(document.all.length); // out : Current HTML Page Collection
console.log(document.all[0]); // out : Current HTML Page Collection -> [0] element
console.log(document.all[document.all.length-1]); // out : Current HTML Page Collection -> last element

// for can used, But forEache can not used
for(let i=0; i<document.all.length;i++)
{
    console.log(document.all[i]); // out : Current HTML Page Collection -> [i] element
}

/*
document.all.forEach(element => {
    console.log(element); // out : Current HTML Page Collection -> [i] element
}); // ERROR
*/

// if we want to use HTML Page Collection, have to convert to array -> Array.from(COLLECTION)

Array.from(document.all).forEach(element => {
    console.log(element); // out : Current HTML Page Collection -> [i] element
});

console.log(document.body); // out : body of Current HTML Page
console.log(document.head); // out : head of Current HTML Page
console.log(document.location); // out : location of Current HTML Page
console.log(document.characterSet); // out : characterSet of Current HTML Page

console.log(document.scripts); // out : all scripts of HTML Page like collection. But gives only previous ones.

console.log(document.links); // out : all links of HTML Page like collection. But gives only previous ones.
console.log(document.links[2].getAttribute("class")); // out : class of link
console.log(document.links[2].className); // out : class of link
console.log(document.links[2].classList); // out : class list of link
console.log(document.links[2].getAttribute("href")); // out : href of link
console.log(document.links[2].href); // out : href of link

console.log(document.forms); // out : all forms of HTML Page like collection. But gives only previous ones.
console.log(document.forms[0].id);
console.log(document.forms[0].getAttribute("id"));
console.log(document.forms["className"]);
console.log(document.forms[0].getAttribute("id"));
console.log(document.forms[0].method); // out : GET or POST

// Select with getElementBy...
console.log(document.getElementById("idName"));
console.log(document.getElementsByClassName("className")); // return collection
console.log(document.getElementsByTagName("div")); // return collection

// Select with Query Selector - Only one of elements
console.log(document.querySelector("#idName")); // first idName element
console.log(document.querySelector(".className")); // first className element
console.log(document.querySelectorAll(".className")); // return node list
console.log(document.querySelector("div")); // first div element












