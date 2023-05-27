var nameele=document.getElementById("name");
var passwordele=document.getElementById("password");
var confirmpasswordele=document.getElementById("confirm");
var emailele=document.getElementById("email");
var button=document.getElementById("btn");
var error=document.getElementById("error");
var success=document.getElementById("success");
var profile=document.getElementById("profile");



button.addEventListener("click",signup);

function signup(event){
var name=nameele.value;
var email=emailele.value;
var password=passwordele.value
var confirm=confirmpasswordele.value;
    event.preventDefault();
    if(name==""&&password==""&&confirm==""&&email==""){
      error.innerText="Error:All the fields are mandatory.";
    }
    else{
        error.innerText="Successfully Signed Up.";
        setTimeout(window.location.replace("/index1.html"),9000)
        
    }


let arr=[];
let obj={
    name:nameele.value,
    email:emailele.value,
    password:passwordele.value
}
arr.push(obj);



     localStorage.setItem("data",JSON.stringify(arr));

     nameele.value="";
     passwordele.value="";
     confirmpasswordele.value="";
     emailele.value="";

      let x=JSON.parse(localStorage.getItem("data"));
      console.log(x);
}

profile.addEventListener("click",profilepage);

function profilepage(event){
    event.preventDefault();
    window.location.replace("/index1.html");
    console.log(localStorage.getItem("data"));
}