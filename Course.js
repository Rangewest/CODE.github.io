var typed = new Typed('#element', {
    // Waits 1000ms after typing "First"
    strings: [`Web development`,`Web design`,`Software development`,`CyberSecurity`],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,

});
$(document).ready(function(){
  $('.theme').click(function(){
    $('.dark-mode').toggleClass('active')
    $('.theme').toggleClass('active')
    $('.box').toggleClass('active')
    $('.Courses').toggleClass('active')
    $('.free h2').toggleClass('active')
    $('.free .card').toggleClass('active')
    $('.free code').toggleClass('active')
    $('.free button').toggleClass('active')
    $('.btn a').toggleClass('active')
  })
})

$(document).ready(function(){
  $('#snap').click(function(){
    $('.snapchat').addClass('active')

  })
  $('.del').click(function(){
    $('.snapchat').removeClass('active')
  })
})
