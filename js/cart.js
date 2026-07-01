let cart=
JSON.parse(
localStorage.getItem("cart")
) || [];

let html="";

cart.forEach(item=>{

html += `
<p>
${item.name}
-
₹${item.price}
</p>
`;

});

document.getElementById(
"cartItems"
).innerHTML = html;