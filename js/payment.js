let cart=
JSON.parse(
localStorage.getItem("cart")
) || [];

let total=0;

cart.forEach(item=>{

total += item.price;

});

document.getElementById(
"totalAmount"
).innerHTML =
"Total : ₹" + total;

function payNow(){

alert(
"Payment Successful"
);

localStorage.removeItem(
"cart"
);

window.location.href =
"success.html";

}