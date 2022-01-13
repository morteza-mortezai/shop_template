$('document').ready(function () {
    $('.mega-toggler').click(function (e) {

        $(this).siblings('.mega').toggleClass('show');

        $('.mega-toggler span').toggleClass('special');
        e.stopPropagation();
    });
    $('body').click(function (e) {

        $('.mega').removeClass('show');
        e.stopPropagation();
    });


    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    );
    wow.init();


    $('.srchtgl').click(function (e) {
        $(this).children('input').css('display', 'block');
        e.stopPropagation();
    });
    $('body').click(function (e) {
        $('.srchtgl').children('input').css('display', 'none');
        e.stopPropagation();
    });


    //Get the button:
    mybutton = document.getElementById('myBtn');
    mybutton.onclick=topFunction;

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

});