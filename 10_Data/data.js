$(document).ready(function(){


    // $('.main').data()のクラス変数　Myname に値 yamada を設定する
    $('.main').data('myName','yamada');


    //$('.main').data().myNameを表示する
    $('button[name=button1]').on('click',function(){
        let data = $('.main').data();
        $('.desc').append(data.myName+'<br>');

    });

    $('button[name=button2]').on('click',function(){
        $('.main').removeData();

    });







});