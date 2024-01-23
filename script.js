console.log('Hello')

const menuButton = document.getElementById('menu-bar-button');
const menuBar = document.querySelector('.menu-bar');

menuButton.addEventListener('click', () => {
    if (/hamburger/.test(menuButton.style.backgroundImage)) {
        menuBar.style.visibility = 'visible';
        menuButton.style.backgroundImage = 'url(./images/icon-close.svg)'
    } else {
        menuBar.style.visibility = 'hidden';
        menuButton.style.backgroundImage = 'url(./images/icon-hamburger.svg)'
    }
})