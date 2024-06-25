const killCount = document.getElementById('dead')
const missCount = document.getElementById('lost')

for (let i = 1; i < 10; i++) {
    holeId = `hole${i}`;
    const hole = document.getElementById(holeId);
    hole.onclick = clickChecker;
}

function clickChecker() {
    holeClass = this.className
    if (holeClass === 'hole hole_has-mole') {
        killCount.textContent = Number(killCount.textContent) + 1;
    } else {
        missCount.textContent = Number(missCount.textContent) + 1;
    }
}