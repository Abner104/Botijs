let products = [];
let total = 0;

function add(product,price){
    console.log(products,price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}
function pay(){
    window.alert(products.join(",\n"));
}