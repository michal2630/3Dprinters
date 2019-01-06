$(document).ready(function(){
 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scrollX').fadeIn(); 
        } else { 
            $('#scrollX').fadeOut(); 
        } 
    }); 

    $('#scrollX').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});