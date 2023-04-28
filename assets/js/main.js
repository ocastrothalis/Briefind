const cursor = document.querySelector('.cursor');
let link = document.querySelectorAll('.link')
let levelUp = document.querySelectorAll('.levelup')
let loader = document.querySelector('.loader')

window.addEventListener('load', vanish)

function vanish(){
    loader.classList.add('disppear')
}

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;')
})