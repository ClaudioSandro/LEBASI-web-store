/*************************************Slide del header******************************/
const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });


/*************************************Slide de section******************************/

  const swiper2 = new Swiper('.swiper-ProductosNuevos', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    slidesPerView: 1,
    spacebetween: 15,
    slidesPerGroupAuto: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });