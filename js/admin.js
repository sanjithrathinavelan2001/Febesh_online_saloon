function getCustomers(){

return new Promise(function(resolve){

setTimeout(function(){

resolve(500);

},1000);

});

}

function getBookings(){

return new Promise(function(resolve){

setTimeout(function(){

resolve(150);

},1000);

});

}

Promise.all([

getCustomers(),
getBookings()

])

.then(function(data){

document.getElementById(
"customers"
).innerHTML=data[0];

document.getElementById(
"bookings"
).innerHTML=data[1];

});