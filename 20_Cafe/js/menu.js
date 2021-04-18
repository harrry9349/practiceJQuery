$(document).ready(function(){


    $("#go").on('click',function(){
        $("img").slideUp(400);
    });

    $("#back").on('click',function(){
        $("img").slideDown(400);
    });

    $("img").on('click',function(){
        $(this).slideToggle(400);
    });
});
