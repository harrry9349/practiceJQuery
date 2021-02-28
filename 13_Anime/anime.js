$(document).ready(function(){

    $('#btn').on('click',function(){
        $(".main img").animate({
            width:"300px",
            opacity:0.5,
            borderWidth:"10px",
            marginLeft:"20px"
        },1500);
    });

    $("#go").on('click',function(){
        $(".main2 img").animate({left: "-=50px"},"slow");
    });

    $("#back").on('click',function(){
        $(".main2 img").animate({left: "+=50px"},"slow");
    });
});
