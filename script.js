$(document).ready(function(){

    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".navbar").addClass("stickly")
        } else {
            $(".navbar").removeClass("stickly")
        }
        if(this.scrollY > 500){
            $(".scroll-up-button").addClass("show")
        } else {
            $(".scroll-up-button").removeClass("show")
        }
    })
})

// Scroll up btn
$(".scroll-up-button").click(function(){
    $("html").animate({scrollTop: 0})
})

 // toggle menu
 $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})

// typing animaton
var typed = new Typed(".typing", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

