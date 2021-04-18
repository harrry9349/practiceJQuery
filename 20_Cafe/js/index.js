$(document).ready(function(){
    let tmp = 0;
    $('.desc').hide(0);
    $('.page-title').on('click',function(){
        if(tmp == 0){
            $('#home').css('background-image','url(../img/3802238_m.jpg),linear-gradient(#c9ffbf,#ffafbd)');
            $('.attention').hide(400);
            $('.desc').show(400);
            tmp = 1;
        }else{
            $('.attention').show(400);
            $('.desc').hide(400);
            tmp = 0;
        }        
    });

    $('.button').on('mouseover',function(){
        $(this).text('Welcome!');
    });

    $('.button').on('mouseout',function(){
        $(this).text('メニューを見る');
    });


});
