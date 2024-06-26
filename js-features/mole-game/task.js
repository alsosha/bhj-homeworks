const killCount = document.getElementById('dead')
const missCount = document.getElementById('lost')

for (let i = 1; i < 10; i++) {
    const holeId = `hole${i}`;
    const hole = document.getElementById(holeId);
    hole.onclick = clickChecker;
}

function clickChecker() {
    holeClass = this.className
        if (holeClass === 'hole hole_has-mole') {
            killCount.textContent = Number(killCount.textContent) + 1;
            if (Number(killCount.textContent) === 10) {
                window.alert('Победа!');
                killCount.textContent = 0
                missCount.textContent = 0
            }
        } else {
            missCount.textContent = Number(missCount.textContent) + 1;
            if (Number(missCount.textContent) === 5) {
                window.alert('Вы проиграли!');
                killCount.textContent = 0
                missCount.textContent = 0
            }
        }
    }