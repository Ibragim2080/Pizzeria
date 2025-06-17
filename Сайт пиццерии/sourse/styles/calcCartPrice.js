// const corzina = document.querySelector('.corzina-box');


// if(priceEl  && typeof myEl.innerHTML !== null){
//     console.log("here");
// }







function calcCartPrice() {

    const cartItems = document.querySelectorAll(".ddd");
    const totalPricedoc = document.querySelector(".total-price");
    const totalPricedoct = document.querySelector(".total-pricet");

    let totalPrice = 0;

    cartItems.forEach(function (Items) {

        const amountEl = Items.querySelector("[data-counter]");
        const priceEl = Items.querySelector("[data-price]");
        const currentprice = parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML);


        totalPrice += currentprice;
        totalPricedoc.innerHTML = totalPrice;
        totalPricedoct.innerHTML = totalPrice;
    })

    console.log(totalPrice);
}
