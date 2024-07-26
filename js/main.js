$(document).ready(function () {
    const owl = $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        items: 3,
    });

    $('.slider-btn-next').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.slider-btn-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    })

    const btnBurger = document.querySelector('.burger');
    const navigation = document.querySelector('.nav');
    btnBurger.onclick = function () {
        this.classList.toggle('active');
        navigation.classList.toggle('nav-mobile');
        document.body.classList.toggle("no-scroll");
    }
});