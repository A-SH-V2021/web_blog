// variables
const navMenu = document.querySelector('.nav')
const bergerMenu = document.querySelector('.toggle-collapse')
const owlCarousel = document.querySelector('.owl-carousel')
const moveUp=document.querySelector('.move-up').childNodes[1]




  
// toggle menu when mobile size
bergerMenu.addEventListener('click',()=> {
    navMenu.classList.toggle('collapse')
})

moveUp.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
})




