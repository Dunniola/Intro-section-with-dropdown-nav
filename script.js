const openIcon = document.querySelector('.openIcon')

const closeIcon = document.querySelector('.closeIcon')

const arrowDown = document.querySelectorAll('.arrowDown')

const arrowUp = document.querySelectorAll('.arrowUp')

const nav = document.querySelector('nav')
const dropDownOne = document.querySelector('.dropdown-1')
const dropDownTwo = document.querySelector('.dropdown-2')







openIcon.addEventListener('click', (e)=>{
    nav.style.display = 'block'
})


closeIcon.addEventListener('click', (e)=>{
    nav.style.display = 'none'
})

arrowDown[0].addEventListener('click', (e)=>{
    dropDownOne.style.display = 'block'
    arrowDown[0].style.visibility = 'hidden'
     arrowUp[0].style.visibility = 'visible'
    
})

arrowUp[0].addEventListener('click', (e)=>{
     dropDownOne.style.display = 'none'
    arrowUp[0].style.visibility = 'hidden'
     arrowDown[0].style.visibility = ' visible'

    
})
arrowDown[1].addEventListener('click', (e)=>{
    dropDownTwo.style.display = 'block'
    arrowDown[1].style.visibility = 'hidden'
    arrowUp[1].style.visibility = 'visible'
    
})

arrowUp[1].addEventListener('click', (e)=>{
     dropDownTwo.style.display = 'none'
    arrowUp[1].style.visibility = 'hidden'
     arrowDown[1].style.visibility = ' visible'

    
    
})





