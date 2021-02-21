$(document).ready(function(){

    $('.sub').hide();
    $('.a').hide();

    // スライドトグルする
    // 最初に押すと.sub内の記述が表示される
    // もう一度押すと.sub内の記述が隠れる
    $('.main-inner').on('click',function(){
        $('.sub').slideToggle(400);
    });

    //表示
    $('#open').on('click',function(){
        // 200ミリ秒で表示する
        $('.a').show(200);
    });

    //非表示
    $('#close').on('click',function(){
        // 400ミリ秒で非表示する
        $('.a').hide(400);
    });


});
