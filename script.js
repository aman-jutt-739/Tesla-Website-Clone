let userName = "ict";
let password = "1234";
function buttonfunction(){
if((document.getElementById("username").value == userName)&&(document.getElementById("password").value == password))
{
    document.getElementById("loginattribute").href = "home.html"
}
else{
    alert("Incorrect Password or Username");
}
}