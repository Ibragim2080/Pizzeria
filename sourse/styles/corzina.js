document.getElementById('open-corzina-btn').addEventListener("click", function () {
    document.getElementById('my-corzina').classList.add('open')
})


document.getElementById('close-my-corzina-btn').addEventListener("click", function () {
    document.getElementById('my-corzina').classList.remove('open')
})



window.addEventListener('click', function (event) {




    if (event.target.dataset.action === 'plus') {
        const plusminus = event.target.closest('.plus-minus');

        const counter = plusminus.querySelector('[data-counter]');
        counter.innerText = ++counter.innerText;
        

    }


    if (event.target.dataset.action === 'minus') {
        const plusminus = event.target.closest('.plus-minus');

        const counter = plusminus.querySelector('[data-counter]');

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
            cartstatus();
        }

        else if (event.target.closest('.corzina-box') && parseInt(counter.innerHTML) === 1) {

            event.target.closest('.tovar').remove();

            
            cartstatus();
        }

       

    }

    if (event.target.dataset.krest === 'bulu') {
        event.target.closest('.tovar').remove();
        cartstatus();
        
    }

    calcCartPrice();



})








    if (event.target.dataset.action === 'bulu') {
        event.target.closest('.tovar').remove();
    }


































// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter=""]');

// btnMinus.addEventListener('click', function () {
//     console.log('Minus click');

//     if ( parseInt(counter.innerText) >1 ) {
//         counter.innerText = --counter.innerText;
//     }


// });

// btnPlus.addEventListener('click', function () {
//     console.log('Plus click');
//     counter.innerText = ++counter.innerText;
// })