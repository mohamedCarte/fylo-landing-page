document.addEventListener('DOMContentLoaded', function(){
  const humbargerMenu = document.querySelector('.navbar .humbarger-menu');

  const mobileMenu = document.querySelector('.navbar .mobile-menu-item');

  humbargerMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('active')
  })
})

// scroll

window.addEventListener('scroll', function(){
  const scroll = document.querySelector('.navbar');

    if(window.scrollY > 0){
      scroll.classList.add('scroll')
    }else{
      scroll.classList.remove('scroll')
  
    }

})