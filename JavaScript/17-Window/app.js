console.log(window.alert("This is a alert!"));

if(confirm("Are You Sure?")){
    console.log("OK");
}else{
    console.log("Cancel");
}

const answer = prompt("2 + 2 = ?");

let value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;


if(confirm("Page Reload?")){
   window.location.reload();
}else{
    console.log("Page not Reload!")
}

value = window.outerHeight;
value = window.outerWidth;

value = window.innerHeight;
value = window.innerWidth;

value = window.scrollX;
value = window.scrollY;