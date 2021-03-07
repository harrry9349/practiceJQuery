$(document).ready(function(){

    $('.button').on('click',function(){
        let param = new Object();
        param.lastname=$('input[name=lastname]').val();
        param.firstname=$('input[name=firstname]').val();

        $.get(
            'request.php',
            param,
            function(data,textStatus,jqxhr){
                console.log(jqhxr);
                $('.desc').html('姓名は'+data+'です。');
            }
        );
    });
});
