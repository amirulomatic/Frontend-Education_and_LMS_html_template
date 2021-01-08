(function($){
    $(document).ready(function(){
    
    
        $('.hamburger-menu a').click(function(){
            
    
            let menuStatus = $('.header .nav').css('display');
            
            if(menuStatus == 'block'){
                $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
                
            }else if(menuStatus == 'none'){
                $('.hamburger-menu a').html('<i class="fas fa-times"></i>');
            };
    
    
            $('.header .nav').slideToggle();
        });
    
    
        $(window).resize(function(){
            var bodyWidth = $('body').width();
    
            if(bodyWidth > 991){
                $('.header .nav').show();
                $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
            }else{
                $('.header .nav').hide();
            };
        });



 
    
    });
    })(jQuery);
    
    
    