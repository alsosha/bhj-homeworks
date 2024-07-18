const getUrl = 'https://students.netoservices.ru/nestjs-backend/poll';

const xhr = new XMLHttpRequest();

xhr.open('GET', getUrl);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        const pollData = JSON.parse(xhr.responseText);
        pollOutput(pollData);
    };
});

function pollOutput(json) {
    const pollId = json.id;

    const title = json.data.title;
    const answers = json.data.answers;

    const pollTitle = document.getElementById('poll__title');
    pollTitle.innerText = title;

    const pollAnswers = document.getElementById('poll__answers');

    answers.forEach((answer, i) => {
        const pollAnswer = document.createElement('button');
        pollAnswer.classList.add('poll__answer');
        pollAnswer.innerText = answer;

        pollAnswers.appendChild(pollAnswer);

        pollAnswer.addEventListener('click', clickHandler(i, pollId));
    })
}

function clickHandler(i, pollId) {
    return () => {
        alert('Спасибо, ваш голос засчитан!');

        const sendText = `vote=${pollId}&answer=${i}`;

        const xhr = new XMLHttpRequest;
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(sendText);

        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === xhr.DONE) {
                const pollResult = JSON.parse(xhr.responseText);
                resultOutput(pollResult);
            };
        });
    }
}

function resultOutput(json) {
    const pollAnswers = document.getElementById('poll__answers');
    pollAnswers.innerHTML = '';

    json.stat.forEach((result) => {
        resultText = result.answer + ': ' + result.votes;
        const div = document.createElement('div');
        div.innerText = resultText;

        pollAnswers.appendChild(div);
    }); 

    




}