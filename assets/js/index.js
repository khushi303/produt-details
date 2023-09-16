function navfun() {
    document.getElementById("nav-icon").classList.toggle("end-0");
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("menu-icon").classList.toggle("cross");
    document.getElementById("ad-1").classList.toggle("d-none");
}
let button = document.getElementById("minus")
let p = document.getElementById("num")
let button1 = document.getElementById("add")

button1.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1
})

button.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1
})

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    autoplaySpeed: 0,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.responsive1').slick({
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    autoplaySpeed: 0,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    // rtl: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.my-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.myslider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

setTimeout(() => {
    console.log("Delayed for 5 second.");
    document.getElementById("preloder").classList.add("opa-0");
    document.getElementById("preloder").classList.add("pointer_event_none");
    document.body.classList.remove("overflow-hidden")
}, 3000);