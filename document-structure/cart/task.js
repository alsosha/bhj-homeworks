const quantityControls = Array.from(document.querySelectorAll('.product__quantity-control'));
quantityControls.forEach(quantityControl => quantityControl.addEventListener('click', quantityHandler));

const productAdds = Array.from(document.querySelectorAll('.product__add'));
productAdds.forEach(productAdd => productAdd.addEventListener('click', cartHandler));

function quantityHandler(event) {
    const quantityValue = event.target.parentElement.querySelector('.product__quantity-value');

    if (event.target.classList.contains('product__quantity-control_dec')) {
        quantityValue.innerText = Number(quantityValue.innerText) - 1;
    } else if (event.target.classList.contains('product__quantity-control_inc')) {
        quantityValue.innerText = Number(quantityValue.innerText) + 1;
    }

    if (Number(quantityValue.innerText) < 1) {
        quantityValue.innerText = 1;
    }
}

function cartHandler(event) {
    const cart = document.querySelector('.cart__products');
    const product = event.target.closest('.product');
    const imgSrc = product.querySelector('.product__image').getAttribute('src');
    const quantityValue = product.querySelector('.product__quantity-value').innerText;
    const dataId = product.getAttribute('data-id');

    if (cart.querySelector(`div.cart__product[data-id='${dataId}']`) === null) {
        const cartProduct = document.createElement('div');
        cartProduct.setAttribute('class', 'cart__product');
        cartProduct.setAttribute('data-id', dataId);

        const cartImg = document.createElement('img');
        cartImg.setAttribute('class', 'cart__product-image');
        cartImg.setAttribute('src', imgSrc);

        const cartValue = document.createElement('div');
        cartValue.setAttribute('class', 'cart__product-count');
        cartValue.innerText = quantityValue;

        cart.appendChild(cartProduct);
        cartProduct.appendChild(cartImg);
        cartProduct.appendChild(cartValue);
    } else {
        const cartValue = cart.querySelector(`div.cart__product[data-id='${dataId}']`).querySelector('.cart__product-count');
        cartValue.innerText = Number(cartValue.innerText) + Number(quantityValue);
    }
}