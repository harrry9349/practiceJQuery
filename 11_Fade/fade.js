$(document).ready(function(){

    //四角が徐々に薄くなる
    $('.anime-on').on('click',function(){
        // アニメ効果を無効にする
        jQuery.fx.off = false;
        $('.main-inner').toggle('slow');
    });

    //四角が消える
    $('.anime-off').on('click',function(){
        // アニメ効果を無効にする
        jQuery.fx.off = true;
        $('.main-inner').toggle('slow');
    });

     //Hello,Worldを表示する
    $('.fader').on('click',function(){
        $('.main-inner2').fadeIn(3000,function(){
            $('span').fadeTo(100,0.5);
        });
        return false;
    });

     //Hello,Worldを非表示する
     $('.fader2').on('click',function(){
        $('.main-inner2').fadeOut(3000,function(){
            $('span').fadeTo(100,0.5);
        });
        return false;
    });

});
