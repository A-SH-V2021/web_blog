const responsive={
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}


// jquery codes
$(document).ready(function () {
  // owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $('<i class="fas fa-long-arrow-alt-left"></i>'),
      $('<i class="fas fa-long-arrow-alt-right"></i>'),
    ],
    responsive:responsive
  });
 
});
