$(document).ready(function(){
    $('.highlight-wrapper').owlCarousel({
        margin: 15,
        loop: true,
        dots: false,
        autoplay: true,
        nav: true,
        responsiveRefresheRate: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2
            },
            768:{
                items:2
            },
            992:{
                items: 3
            }
        }
    });

    $('.video-wrapper').owlCarousel({
        items: 4,
        margin: 15,
        loop: true,
        dots: false,
        autoplay: true,
        nav: true,
        responsiveRefresheRate: true,
        responsiveRefresheRate: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2
            },
            768:{
                items:2
            },
            992:{
                items: 3
            }
        }
    });

    $('.single-player').slice(0, 3).show();

    $('.load-more').on("click", function(){
        $('.single-player:hidden').slice(0, 3).show("slow");
        if($('.single-player:hidden').length == 0)
        {
            $('.load-more').fadeOut();
        }
    });

    $('.image').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
          
    });
    $('.video').magnificPopup({
        type:'iframe'
    });
});

function openNav(){
    document.getElementById('myNav').style.width = "100%";
}
function closeNav(){
    document.getElementById('myNav').style.width = "0%";
}