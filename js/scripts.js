
$(document).ready(()=>{

  // scroll
  $(window).scroll(()=>{
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  // toglle button 

  $('.menu-toggler').click (()=>{
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active"); 
  });

  $('.navbar-menu a').click(()=>{
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  })

});
