$(document).ready(function(){

    // 上から2番目のpに背景色赤：文字色白を設定
    $('.main1 button').on('click',function(){
        $('.sticky').eq(2).css('backgroundColor','red').css('color','white');
    });

    // 下から3番目のpに背景色赤：文字色白を設定
    $('.main2 button').on('click',function(){
        $('.sticky').eq(-3).css('backgroundColor','red').css('color','white');
    });
    
    // セレクタで除外
    $('#button1').on('click',function(){
        $('.sticky3').not(':nth-child(3)').css('backgroundColor','red');
    });

    // クロージャで除外
    $('#button2').on('click',function(){
        $('.sticky3').not(function(){
            if($(this).index() == 1){
                return $(this);
            }
        }).css('backgroundColor','red');
    });
        
    //ボタン「ネコ族以外」をクリックする
    $('.main3 button').on('click',function(){
        alert('ボタン「ネコ族以外」がクリックされました');
        $('.main4 button').trigger('click');
    });
    // ネコ族以外
    $('.main4 button').on('click',function(){
        $('li > div').has('.notcat').css('backgroundColor','red').css('color','white');
    });
    



});