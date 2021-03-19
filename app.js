//--- navbar sticky and scroll icon visibilty
const navbar = document.querySelector('.navbar')
const scrollButton = document.querySelector('.scroll-up-button')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky')
        scrollButton.classList.add('show')

    } else {
        navbar.classList.remove('sticky')
        scrollButton.classList.remove('show')
    }
})

// -- text effect starts here ----------
const textDev = document.querySelector('.textDev');
let text = "UI Developer";

let idx = 0;
let speed = 150
setTimeout(writeText, 250)

function writeText() {

    // textDev.style.color = 'rgb(237, 79, 79)';

    textDev.textContent = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 0
        if (text === "UI Developer") {
            text = "Grapic Designer"
        } else if (text === "Grapic Designer") {
            text = "UI Developer"
        }
    }
    setTimeout(writeText, speed)
}
//-- text effect ends here --------------

// media query active

const menu = document.querySelector('.menu')
const menuBar = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const links = document.querySelectorAll('.link')

menuBar.addEventListener('click', () => {
    menu.classList.add('active');
    closeBtn.classList.add('active');
    menuBar.classList.remove('active');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    closeBtn.classList.remove('active');
    menuBar.classList.add('active');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            closeBtn.classList.remove('active');
            menuBar.classList.add('active');
        }
    })
})

// scrolll Effects
const leftSections = document.querySelectorAll('.left')
const rightSections = document.querySelectorAll('.right')
const triggerHeight = window.innerHeight / 5 * 4

window.addEventListener('scroll', openSection)
openSection()

function openSection() {
    leftSections.forEach(leftSection => {
        const sectionTop = leftSection.getBoundingClientRect().top
        if (sectionTop < triggerHeight) {
            leftSection.classList.remove('onLeft')
        } else {
            leftSection.classList.add('onLeft')
        }
    })
    rightSections.forEach(rightSection => {
        const sectionTop = rightSection.getBoundingClientRect().top
        if (sectionTop < triggerHeight) {
            rightSection.classList.remove('onRight')
        } else {
            rightSection.classList.add('onRight')
        }
    })
}

// theme colors events
const html = document.querySelector('html')

setInterval(() => {
    adClass()
}, 5000);

function adClass() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        html.classList.add('green')
    } else if (html.classList.contains('green')) {
        html.classList.remove('green')
        html.classList.add('red')
    } else if (html.classList.contains('red')) {
        html.classList.remove('red')
        html.classList.add('blue')
    } else if (html.classList.contains('blue')) {
        html.classList.remove('blue')
    } else {
        html.classList.add('dark')
    }
}







