/*************************************Slide del header******************************/
const swiper = new Swiper('.swiper-hero', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    
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