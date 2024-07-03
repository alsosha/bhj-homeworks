const haveTltps = Array.from(document.querySelectorAll('.has-tooltip'));

haveTltps.forEach(hasTltp => {
    const tltpText = hasTltp.getAttribute('title');
    

    const tltp = document.createElement('div');
    tltp.innerText = tltpText;
    tltp.setAttribute('class', 'tooltip');

    hasTltp.insertAdjacentElement('afterend', tltp);

});

const tltps = Array.from(document.querySelectorAll('.tooltip'));

haveTltps.forEach(hasTltp => hasTltp.addEventListener('click', tooltipsHandler));

function tooltipsHandler(event) {
    event.preventDefault();

    const currentTltp = event.target.nextElementSibling;

    const {left, bottom} = event.target.getBoundingClientRect();
    currentTltp.setAttribute('style', `left: ${left}px; top: ${bottom}px`);

    if (currentTltp.classList.contains('tooltip_active')) {
        currentTltp.classList.remove('tooltip_active');
    } else {
        tltps.forEach(tltp => tltp.classList.remove('tooltip_active'));
        currentTltp.classList.add('tooltip_active');
    }
}

