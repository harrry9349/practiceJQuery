$(document).ready(function(){

    $('.button1').on('click',function(){
        $('.desc').append('処理開始<br>');
        setTimeout(function(){
            $('.desc').append('タイマーが2秒経過をお知らせします<br>');
        },2000);
        $('.desc').append('処理終了<br>');
    });

    function getProducts(){
        let dfd = $.Deferred();
        $.get('deferred.php',{'flg':1},null,'json')
        .done(function(data){
            dfd.resolve(data);
        })
        .fail(function(){
            dfd.reject();
        });
        return dfd.promise();
    }

    $('.button2').on('click',function(){
        let promise = getProducts();
        promise
        .done(function(data){
            $('.desc2').append(data.result);
        })
        .fail(function(data){
            $('.desc2').append('APIコールに失敗しました<br>');
        });
        
    });
});
