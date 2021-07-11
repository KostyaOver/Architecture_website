$(document).ready(function(){
    $('.down').click(function(){
        $(this).parent().next().slideToggle(500);
    });
    
    $('.burger-menu').click(function(){
        $('.mobile-menu').animate({left: 0}, 500);
    });
    
    $('.close').click(function(){
        $('.mobile-menu').animate({left: -340},500);
    });


    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        autoplayHoverPause:false,
        navText: [
            '<svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 3L5 23L27 45" stroke="white" stroke-width="6" stroke-linecap="round"/></svg>',
            '<svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L25 23L3 45" stroke="white" stroke-width="6" stroke-linecap="round"/></svg>'
        ]
    });

    $("#carousel-testimotionals").owlCarousel({
        margin:10,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2,
                margin: 20
            },
            1000:{
                items: 3
            }
        }
    });

    $("#carousel-projects").owlCarousel({
        margin: 20,
        nav: false,
        navText:['', ''],
        responsive: {
            0: {
                items: 1,
            },
            690: {
                items: 2,
                margin: 20
            },
            1000:{
                items: 3                
            }
        }
    });

})
