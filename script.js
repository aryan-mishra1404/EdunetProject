// <!-- Initialize Swiper -->
    var swiper = new Swiper(".card-swiper", {
        // slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
                // spaceBetween: 20,
            },
            450: {
                slidesPerView: 2,
                // spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                // spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
