const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});