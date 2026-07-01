function sendMessage(){

return new Promise(function(resolve,reject){

var name=
document.getElementById("name").value;

if(name==""){

reject("Enter Name");

}
else{

resolve("Message Sent");

}

})

.then(function(msg){

document.getElementById(
"result"
).innerHTML=
"<div class='alert alert-success'>"
+msg+
"</div>";

})

.catch(function(err){

document.getElementById(
"result"
).innerHTML=
"<div class='alert alert-danger'>"
+err+
"</div>";

});

}