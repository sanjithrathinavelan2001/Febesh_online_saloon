function getCustomerCount(){

return new Promise(function(resolve){

setTimeout(function(){

resolve(500);

},1000);

});

}

getCustomerCount()

.then(function(count){

document.getElementById(
"customerCount"
).innerHTML=count;

})

.catch(function(){

alert("Error loading data");

});