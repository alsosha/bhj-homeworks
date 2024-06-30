const rotatorOne = document.querySelectorAll('.rotator')[0];

setInterval(casesRotator(rotatorOne), 1000);

function casesRotator(rotator) {
    return () => {
        const rotatorCases = Array.from(rotator.children)
        const activeCase = rotator.querySelector('.rotator__case_active');
        const activeIndex = rotatorCases.indexOf(activeCase);

        rotatorCases.forEach((rotatorCase, i) => {

            let condition;
            
            if (i === 0 && activeIndex === rotatorCases.length - 1) {
                condition = true;
            } else if (i === activeIndex + 1) {
                condition = true;
            } else {
                condition = false;
            }

            rotatorCase.classList.toggle('rotator__case_active', condition);
        })
    }
}