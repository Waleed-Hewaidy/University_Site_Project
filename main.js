// Implementing Sideling (close&open)

const showMenuBtn = document.getElementById('hamburger')
const closeMenuBtn = document.getElementById('closeMenuBtn')
const sideMenu = document.querySelector('.side-links-cont')
const navContainer = document.querySelector('.nav-container')
const heroContainer = document.querySelector('.heroContainer')



showMenuBtn.addEventListener('click',()=>{
sideMenu.classList.add('showSideLinks')
})

closeMenuBtn.addEventListener('click',()=>{
sideMenu.classList.remove('showSideLinks')
})

navContainer.addEventListener('click', (e)=>{
    if(e.target !== showMenuBtn.firstElementChild){
        sideMenu.classList.remove('showSideLinks')
    }
})

heroContainer.addEventListener('click', ()=>{
    sideMenu.classList.remove('showSideLinks')
})
