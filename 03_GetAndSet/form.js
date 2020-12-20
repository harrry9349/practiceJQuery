$(document).ready(function(){
    // $().html();

    // formを取得する
    $('.button1').on('click',function(){
        $('form input:text').each(function(){
            $('.desc').append($(this).attr('name')+ '=' + $(this).val() + '<br/>');
        });

        $('select option:selected').each(function(){
            $('.desc').append($(this).attr('name')+ '=' + $(this).val() + '<br/>');
        });
    });



    

    // formを設定する
    $('.button2').on('click',function(){
        $('input[name="lastname"]').val('いとう');
        $('input[name="firstname"]').val('たくろう');
    });

});