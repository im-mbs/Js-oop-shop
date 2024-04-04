import Cart from "./models/cart.js";
import Products from "./models/products.js";
import { fetchData } from "./utils/httpreq.js"

const productNode = document.getElementById("products");
const cartListNode = document.getElementById("card-list");
const totalPriceNode = document.getElementById("total-price").querySelector("span");



async function render (){
    const productData = await fetchData();
    
    const cartInstance = new Cart(cartListNode , totalPriceNode );
    const productsInstance = new Products(productNode , productData , cartInstance);
    
    productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded" , render)