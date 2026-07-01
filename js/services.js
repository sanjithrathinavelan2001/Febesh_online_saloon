function loadServices(){

return new Promise(function(resolve){

setTimeout(function(){

resolve("Services Loaded");

},1000);

});

}

loadServices()

.then(function(data){

console.log(data);

});