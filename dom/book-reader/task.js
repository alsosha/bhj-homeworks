const sizeBtns = Array.from(document.querySelectorAll('.font-size'));

sizeBtns.forEach(sizeBtn => sizeBtn.addEventListener('click', sizeChanger));

function sizeChanger(event) {
    event.preventDefault();
    sizeBtns.forEach(sizeBtn => sizeBtn.classList.remove('font-size_active'));
    event.target.classList.add('font-size_active');

    const btnIndex = sizeBtns.indexOf(event.target);

    const book = document.querySelector('.book');
    book.className = 'book';

    if (btnIndex === 0) {
        book.classList.add('book_fs-small');
    } else if (btnIndex === 2) {
        book.classList.add('book_fs-big');
    }
}