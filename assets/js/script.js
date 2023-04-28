let menuToggle = document.querySelector(".menuToggle")
let navigation = document.querySelector(".navigation")

menuToggle.onclick = () => navigation.classList.toggle("active")

const header = document.getElementsByTagName('header')

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 80){
        header[0].style.background = 'rgba(15, 13, 13, .8)'
    } else if(window.scrollY < 80){
        header[0].style.removeProperty('background')
    }
    
    if(window.scrollY > 500){
        header[0].classList.add('navigate')
    } else if(window.scrollY < 500){
        header[0].classList.remove('navigate')
    }
})

const contactOver = document.getElementById('contact')
const contact = document.querySelector('.nav-second.contact')

const aboutOver = document.getElementById('about')
const about = document.querySelector('.nav-second.about')

const jobOver = document.getElementById('job')
const job = document.querySelector('.nav-second.job')

contactOver.addEventListener('mouseover', () => {
    contact.style.display = 'flex'
    about.style.display = 'none'
    job.style.display = 'none'
})

contactOver.addEventListener('click', () => {
    contact.style.display = 'flex'
    about.style.display = 'none'
    job.style.display = 'none'
})

aboutOver.addEventListener('mouseover', () => {
    about.style.display = 'flex'
    contact.style.display = 'none'
    job.style.display = 'none'
})

aboutOver.addEventListener('click', () => {
    about.style.display = 'flex'
    contact.style.display = 'none'
    job.style.display = 'none'
})

jobOver.addEventListener('mouseover', () => {
    job.style.display = 'flex'
    contact.style.display = 'none'
    about.style.display = 'none'
})

jobOver.addEventListener('click', () => {
    job.style.display = 'flex'
    contact.style.display = 'none'
    about.style.display = 'none'
})



link.forEach((item) => item.addEventListener('mouseover', () => cursor.classList.add('expand')))
link.forEach((item) => item.addEventListener('mouseout', () => cursor.classList.remove('expand')))
levelUp.forEach((item) => item.addEventListener('mouseover', () => cursor.classList.add('levelup-expand')))
levelUp.forEach((item) => item.addEventListener('mouseout', () => cursor.classList.remove('levelup-expand')))

const homeVideo = document.getElementById('video-home')
let videoI = 0
function videoHome(){

    if(videoI === 0) homeVideo.setAttribute('src','assets/video/Launching Of Rocket.mp4')
    if(videoI === 1) homeVideo.setAttribute('src','assets/video/Rocket Lift Off.mp4')
    if(videoI === 2) homeVideo.setAttribute('src','assets/video/Rocket Take Off Countdown.mp4')
    if(videoI === 3) homeVideo.setAttribute('src','assets/video/Rocket Taking Off.mp4')

    videoLoop()
 
}

function videoLoop(){
    if(videoI <= 3) videoI++ 
    if(videoI > 3) videoI = 0
}

setInterval(videoHome, 10000)

const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
let index = 0;
const textInTimer = 6000,
    textOutTimer = 5800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == txtsLen - 1) {
            index = 0;
        }
        else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;

const symbol = document.getElementById('symbol-stroke')
const mask = document.getElementById('symbol-mask')
const color = document.getElementById('video-color')
const text = document.querySelector('.animate-text')

symbol.addEventListener('mouseover', ()=>{
    text.classList.add('fadeOut')
    mask.classList.add('fadeIn')    
    
})

symbol.addEventListener('mouseout', ()=>{
    text.classList.remove('fadeOut')
    mask.classList.remove('fadeIn')
})

