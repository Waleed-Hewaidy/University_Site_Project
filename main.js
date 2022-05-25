// Implementing Sideling (close&open)

const showMenuBtn = document.getElementById('hamburger')
const closeMenuBtn = document.getElementById('closeMenuBtn')
const sideMenu = document.querySelector('.side-links-cont')

showMenuBtn.addEventListener('click',()=>{
sideMenu.classList.add('showSideLinks')
})
closeMenuBtn.addEventListener('click',()=>{
sideMenu.classList.remove('showSideLinks')
})
 