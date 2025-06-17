

const corzina = document.querySelector('.corzina-tovar')

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-img').getAttribute('src'),
            title: card.querySelector('.card-title').innerText,
            weight: card.querySelector('.price').innerText,
        }

        const itemInCart = corzina.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {

            const counterElement = itemInCart.querySelector('[data-counter]');          
            counterElement.innerHTML = ++counterElement.innerHTML;
            
        }

        else {

            const cardItemHTML = `  <div class="tovar" data-id="${productInfo.id}">

                <div class="aaa">

                    <img id="corzina-img"
                        src="${productInfo.imgSrc}"
                        alt="${productInfo.imgSrc}">
                    <Div class="opisancorz">
                        <p>
                           ${productInfo.title}
                        </p>

                          <a data-krest="bulu" class="bulu" href="javascript:void(0);">
              &#10006;
            </a>

                    </div>

                    <div class="ddd">
                        <p data-price class="price-corzina">${productInfo.weight}₽</p>
                         

                        <!-- Счетчик -->
                        <div class="plus-minus">
                            <a class="minus" data-action="minus" href="javascript:void(0);">&#8722</a>
                            <div class="colvo" data-counter>1</div>
                            <a class="plus" data-action="plus" href="javascript:void(0);">&#x2b</a>
                        </div>

                    </div>

                </div>`;
            corzina.insertAdjacentHTML('beforeend', cardItemHTML);

        }

        cartstatus();
         
    }

    calcCartPrice();

})
