

// document.getElementById("launchApp").onclick = function() {
//     window.location.href = C:\Users\baira\Desktop\Проект Брауна\Проект Брауна\project1
// };

function cartstatus() {

    const corzina = document.querySelector('.corzina-tovar');
    const cartempty = document.querySelector('[data-cart-empty]');
const tovarov = document.querySelector('.tovarov')
    const info = document.querySelector('.all-info');
   
    const orderform = document.querySelector('#order-form');
    const carttotaldoc = document.querySelector('#cart-total');

    if (corzina.children.length > 0) {

        console.log('ttt')
       
        tovarov.classList.remove('none')
        info.classList.remove('none')
        cartempty.classList.add('none')

        orderform.classList.remove('none')
        orderform.classList.add('form')
        carttotaldoc.classList.remove('none')
    } else {

        console.log('aaa')

        tovarov.classList.add('none')
        info.classList.add('none')
        carttotaldoc.classList.add('none')
        cartempty.classList.remove('none')
        orderform.classList.add('none')
        orderform.classList.remove('form')
    }

}