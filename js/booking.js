function bookAppointment(){

var name=
document.getElementById("name").value;

var phone=
document.getElementById("phone").value;

return new Promise(function(resolve,reject){

if(name=="" || phone==""){

reject(
"Please Fill All Fields"
);

}

else{

setTimeout(function(){

resolve(
"Appointment Confirmed"
);

},1500);

}

})

.then(function(msg){

document.getElementById(
"result"
).innerHTML=

"<div class='alert alert-success'>"
+
msg
+
"</div>";

})

.catch(function(err){

document.getElementById(
"result"
).innerHTML=

"<div class='alert alert-danger'>"
+
err
+
"</div>";

});

}