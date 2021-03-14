$(document).ready(function(){

    $('.button').on('click',function(){
        let param = new Object();
        param.email=$('input[name=email]').val();
        param.phone=$('input[name=phone]').val();

        $.ajax({
            url: 'request.php',
            data: param,
            dataType: 'json'
            })
            .done(function(data){
            
                console.log(data);
                $('.desc').append('メールアドレス:'+data.email+'<br>電話番号:'+data.phone+'<br>');
            })
            .fail(function(data){
                $('.desc').append('失敗<br>');
            })
            .always(function(data){
                $('.desc').append('完了<br>');
            })
    });
});
