function registerUser(){

new Promise(function(resolve,reject){

var name=
document.getElementById("name").value;

if(name==""){

reject("Enter Name");

}
else{

resolve("Registration Successful");

}

})

.then(function(msg){

document.getElementById(
"registerResult"
).innerHTML=

"<div class='alert alert-success'>"
+msg+
"</div>";

})

.catch(function(err){

document.getElementById(
"registerResult"
).innerHTML=

"<div class='alert alert-danger'>"
+err+
"</div>";

});

}