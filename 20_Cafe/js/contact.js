$(document).ready(function(){
    $('.form').hide(0);
    $('.open').on('click',function(){
        $(".form").show(400);
    });

    $('.button[name="submit"]').on('click',function(){
        alert("送信しました");

        console.log($('input[name="lastname"]').val());
        console.log($('input[name="firstname"]').val());
        console.log($('input[name="email"]').val());
        console.log($('input[name="phone"]').val());
        console.log($('select[name="job"]').val());
    });

    $('.button[name="set"]').on('click',function(){
        alert("設定しました");

        $('input[name="lastname"]').val('山田');
        $('input[name="firstname"]').val('太郎');
        $('input[name="email"]').val('xxxx@xxx.com');
        $('input[name="phone"]').val('11223344');
    });
});
