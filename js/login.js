function loginUser(){

return new Promise(function(resolve,reject){

var email=
document.getElementById("email").value;

var password=
document.getElementById("password").value;

if(email=="" || password==""){

reject("Enter Credentials");

}
else{

resolve("Login Successful");

}

})

.then(function(msg){

document.getElementById("result")
.innerHTML=

"<div class='alert alert-success'>"
+msg+
"</div>";

})

.catch(function(err){

document.getElementById("result")
.innerHTML=

"<div class='alert alert-danger'>"
+err+
"</div>";

});

}