$(document).ready(function(){
    // 全選択　$('*')

    // すべての要素に赤いラインを設定
    $('.main1 button').on('click',function(){
        $('*').css('border','1px solid red');
    });

    // 指定idに赤いラインを設定
    $('.main2 button').on('click',function(){
        $('#select').css('border','1px solid red');
    });

    // 指定classに赤文字を設定
    $('.main3 button').on('click',function(){
        $('.red').css('color','red');
    });

    // 指定要素に赤文字を設定
    $('.main5 #eq').on('click',function(){
        $('td:eq(2)').css('background-color','red');
    });

    $('.main5 #lt').on('click',function(){
        $('td:lt(4)').css('background-color','red');
    });
    
    $('.main5 #gt').on('click',function(){
        $('td:gt(3)').css('background-color','red');
    });

    $('.main5 #even').on('click',function(){
        $('td:even').css('background-color','red');
    });

    $('.main5 #odd').on('click',function(){
        $('td:odd').css('background-color','red');
    });

    $('.main5 #first').on('click',function(){
        $('td:first').css('background-color','red');
    });

    $('.main5 #last').on('click',function(){
        $('td:last').css('background-color','red');
    });

    $('.main5 #not').on('click',function(){
        $('td:not(:eq(5))').css('background-color','red');
    });

    $('.main5 #root').on('click',function(){
        $(':root').css('background-color','red');
    });

    $('.main5 #lang').on('click',function(){
        $(':lang(en-us)').css('background-color','red');
    });
    
    $('.main5 #clear').on('click',function(){
        $('td,html').css('background-color','white');
    });


});