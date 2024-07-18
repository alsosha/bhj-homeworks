const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let result = JSON.parse(xhr.responseText);
        resultOutput(result);
    };
});

function resultOutput(json) {
    const valutesArray = json.response.Valute;

    console.log(valutesArray);

    for (var key in valutesArray) {
        let valuteInfo = valutesArray[key];

        let Code = valuteInfo.CharCode;
        let Value = valuteInfo.Value;
        let Currency = valuteInfo.Name;

        let items = document.getElementById('items');
        let item = document.createElement('div');
        item.classList.add('item');

        let itemCode = document.createElement('div');
        itemCode.classList.add('item__code');
        itemCode.innerText = Code;
        item.appendChild(itemCode);

        let itemValue = document.createElement('div');
        itemValue.classList.add('item__value');
        itemValue.innerText = Value;
        item.appendChild(itemValue);

        let itemCurrency = document.createElement('div');
        itemCurrency.classList.add('item__currency');
        itemCurrency.innerText = Currency;
        item.appendChild(itemCurrency);

        items.appendChild(item);
    }

}







