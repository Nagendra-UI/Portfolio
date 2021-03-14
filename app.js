//--- navbar sticky
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }

})

//-- text effect starts here ----------
// const textEl = document.querySelector('.logo');
// const text = "Portpolio.";
// let idx = 1;
// let speed = 100
// setTimeout(writeText, 250)

// function writeText() {

//     textEl.style.color = 'rgb(237, 79, 79)';

//     textEl.innerText = text.slice(0, idx)
//     idx++
//     if (idx > text.length) {
//         idx = 9
//     }
//     setTimeout(writeText, 200)
// }
//-- text effect ends here --------------

// media query active

const menu = document.querySelector('.menu')
const menuBar = document.getElementById('bar')

menuBar.addEventListener('click', () => {
    menu.classList.toggle('active');
})


