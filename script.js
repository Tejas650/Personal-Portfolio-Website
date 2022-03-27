$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // Scroll up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide up script
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");   
    });

    // Typing animation script

    var typed = new Typed(".typing", {
        strings: ["Front end Developer", "Developer", "Creator", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });
});

