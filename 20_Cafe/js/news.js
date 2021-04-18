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


    $("#move").on('click',function(){
        $(".main3 img").animate({left: "+=800px"},2000);
    });

    $("#stop").on('click',function(){
        $(".main3 img").stop();
    });

    $("#return").on('click',function(){
        $(".main3 img").animate({left: "-=400px"},2000);
    });

    $("#start").on('click',function(e){
        $(".area").css("backgroundColor","blue");
        $(".area").animate({left: "+=200px"},1500);
        $(".area").delay(1000);
        $(".area").animate({top: "+=100px"},400);
        $(".area").delay(3000);

        $(".area").queue(function(){
            $(".area").css("backgroundColor","red");
            $(".area").dequeue();
        });
    });

    $("#clear").on('click',function(){
        $(".area").clearQueue();
    });
});
