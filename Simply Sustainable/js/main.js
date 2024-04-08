// Step 1: Defining Constants
const clickButton = document.querySelector('.menu-icon');
// Step 2: Adding A Click Event
clickButton.addEventListener('click',() => {
    document.querySelector('nav').classList.toggle('show-nav');
});