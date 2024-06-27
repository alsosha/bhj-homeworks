const listButtons = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownLists = Array.from(document.querySelectorAll('.dropdown__list'));

listButtons.forEach((listButton) => listButton.addEventListener('click', listActivator));
dropdownLists.forEach((dropdownList) => dropdownList.addEventListener('click', listChanger));

function listActivator() {
    this.parentElement.querySelector('.dropdown__list').classList.add('dropdown__list_active');
}

function listChanger(event) {
    event.preventDefault();

    let listItem = event.target.closest('.dropdown__item');

    if (listItem === null) {
        return;
    }

    let listButton = listItem.closest('.dropdown').querySelector('.dropdown__value');
    let dropdownList = listItem.parentElement;

    listButton.textContent = listItem.textContent;
    dropdownList.classList.remove('dropdown__list_active');
}