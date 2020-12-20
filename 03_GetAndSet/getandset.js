$(document).ready(function(){
    // $().html();

    // htmlを取得する
    let htmlStr = $('.sticky:first').html();
    console.log(htmlStr);

     // htmlを設定する
     $('.button1').on('click',function(){
        $('.sticky:last').html('<p = class="desc"><b>大掃除は疲れる……</b></p>');
     });


    

    //文字列を取得する
    let textStr = $('.sticky').text();
    console.log(textStr);

    // htmlを設定する
    $('.button2').on('click',function(){
        $('.sticky:first p').text('～～～風呂掃除～～～');
    });


});