const clicker = document.getElementById('clicker__counter');
const clickerImg = document.getElementById('cookie');

clickerImg.onclick = clickCounter;

function clickCounter() {
    clicker.textContent = Number(clicker.textContent) + 1;
    if (Number(clickerImg.width) > 200) {
        clickerImg.width = Number(clickerImg.width) - 50;
    } else {
        clickerImg.width = Number(clickerImg.width) + 50;
    }
}