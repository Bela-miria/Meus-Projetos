let prevButton = document.getElementById('prev')
let netxButton = document.getElementById('next')
let conteiner = document.querySelector('.conteiner')
let items = conteiner.querySelectorAll('.list .item') // corrigido aqui
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = conteiner.querySelector('.list')

let active = 0
let FirstPosition = 0
let LastPosition = items.length - 1

function setSlider(){
    let itemOld = conteiner.querySelector('.list .item.active')
    if (itemOld) itemOld.classList.remove('active') 

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}    

netxButton.onclick = () => {
    list.style.setProperty('--Calculation', '-1')
    active = active + 1 > LastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    list.style.setProperty('--Calculation', '1')
    active = active - 1 < FirstPosition ? LastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}

