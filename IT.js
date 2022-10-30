$(document).ready(function(){
  $('.box').click(function(){
    $('.to').toggleClass('active')
    $('.main').toggleClass('active')
    $('.text span').toggleClass('active')
    $('.lang').toggleClass('active')
    $('.scroll').toggleClass('active')
    $('.lang .Text span').toggleClass('active')
    $('.dark-mode').toggleClass('active')
    $('.box').toggleClass('active')
  })
  // $('.m-s').click(function(){
  //   $('input').toggleClass('active')
  //   $('.m-s').toggleClass('active')
  // })
})
var un = "Un"
var typed = new Typed('#element', {
  // Waits 1000ms after typing "First"
  strings: [`${un}thinkable`,`${un}predictable`,`${un}imaginable`,`${un}believable`],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

$(document).ready(function(){
  $('#snap').click(function(){
    $('.snapchat').addClass('active')
    $('.main').addClass('doom')
    $('.lang').addClass('doom')
    $('.forms').addClass('doom')
    $('.footer').addClass('doom')
    $('.created').addClass('doom')
    $('.themes').addClass('doom')
  })
  $('.del').click(function(){
    $('.snapchat').removeClass('active')
    $('.main').removeClass('doom')
    $('.lang').removeClass('doom')
    $('.forms').removeClass('doom')
    $('.footer').removeClass('doom')
    $('.created').removeClass('doom')
    $('.themes').removeClass('doom')
  })
})
/*
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});*/

const bd = document.body,
    cur = document.getElementById("cursor");
bd.addEventListener("mousemove", function(n) {
    (cur.style.left = n.clientX + "px"), (cur.style.top = n.clientY + "px")
})