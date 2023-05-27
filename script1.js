var nameele=document.getElementById("name");
var passwordele=document.getElementById("password");
var confirmpasswordele=document.getElementById("confirm");
var emailele=document.getElementById("email");
var main=document.getElementsByClassName("main");
var button=document.getElementById("btn");
var data=localStorage.getItem("data");
nameele.innerHTML=`Name: ${localStorage.getItem("data")}`;
passwordele.innerHTML=`Email: ${localStorage.getItem("data")}`;
emailele.innerHTML=`Password: ${localStorage.getItem("data")}`;
console.log(data);

button.addEventListener("click",logout);

function logout(event){
    event.preventDefault();
main.style.display="none";
}