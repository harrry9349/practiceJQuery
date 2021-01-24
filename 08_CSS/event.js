$(document).ready(function(){



    //この要素の色はrgb(x, y, z)です。
    $('.main-inner').on('click',function(){
        let color = $(this).css("background-color");
        $("#result").html("この要素の色は<span style='color:"+color+";'>"+color+"</span>です。");
    });

    $('.button2').on('click',function(){
        let hashObj = {
            backgroundColor:"green",
            color:"white",
            height:"500px",
            weight:"500px"
        }
        $('.main-inner').css(hashObj);
    });







});