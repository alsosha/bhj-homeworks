const timer = document.getElementById('timer');

const intervalId = setInterval(timerWorker, 1000);

function timerWorker() {
    const timerValue = parseInt(timer.textContent);

    if (parseInt(timerValue) === 0) {
        window.alert('Вы победили в конкурсе');
        clearInterval(intervalId);
        return;
    } 

    timer.textContent = timerValue - 1;
}

// Второй вариант решения
// const timer = document.getElementById('timer');

// setTimeout(timerWorker, 1000);

// function timerWorker() {
//     const timerValue = parseInt(timer.textContent);

//     if (parseInt(timerValue) === 0) {
//         window.alert('Вы победили в конкурсе');
//         return;
//     } 

//     timer.textContent = timerValue - 1;

//     setTimeout(timerWorker, 1000);
// }