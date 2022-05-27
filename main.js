// Implementing Side Menu (close & open)

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

// Reviews Functionality
const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "2022 Medecine Graduate",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "Former Instructor in (Al-Furat)",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Waleed Hewaidy",
      job: "Computer Science Student",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "Former Student Staff Chief",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const reviewIMG = document.querySelector('.singleReviewIMG')
const reviewerName = document.querySelector('.reviewerName')
const reviewerJob = document.querySelector('.reviewerJob')
const reviewerText = document.querySelector('.reviewerText')

const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
const RandomReviewBtn = document.querySelector('.RandomReviewBtn')

let currentPosition = 0;

window.addEventListener('DOMContentLoaded',()=>{
    switchReview(currentPosition)
})

function switchReview(position){
    let singleReview = reviews[position]
    reviewIMG.src = singleReview.img;
    reviewerName.textContent = singleReview.name;
    reviewerJob.textContent = singleReview.job;
    reviewerText.textContent = singleReview.text
}
nextBtn.addEventListener('click',()=>{
    currentPosition++
    if(currentPosition > reviews.length -1 ){
        currentPosition = 0
    }
    switchReview(currentPosition)
})
prevBtn.addEventListener('click',()=>{
    currentPosition--
    if(currentPosition <= 0){
        currentPosition = reviews.length -1 
    }
    switchReview(currentPosition)
})
RandomReviewBtn.addEventListener('click',()=>{
    currentPosition = Math.floor(Math.random() * reviews.length)
    switchReview(currentPosition)
})

