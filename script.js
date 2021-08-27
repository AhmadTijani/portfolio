$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //SLIDE-UP SCRIPT
    $(`.scroll-up-btn`).click(function(){
        $('html').animate({scrollTop: 0});
    });

    //TOGGLE MENU/NAVBAR SCRIPT
    $(`.menu-btn`).click(function(){
        $('.navbar .menu').toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");
    });
});

    //TYPING ANIMATION SCRIPT
    var typed = new Typed(".typing", {
        strings: ["Front-end Developer", "Translator", "Digital Marketer", "Teacher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Front-end Developer", "Translator", "Digital Marketer", "Teacher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }