$(document).ready(function(){


    function doclick(){
        alert($(this).text());
    }

    //イベントハンドラを登録する
    $('.main table').on('click dblckick','td',{msg:'をクリックしました'},doclick),

    //イベントハンドラを一度だけ登録する
    $('.main table').one('click','td',{msg:'をクリックしました（一度のみ表示）'},function(e){
        alert($(e.target).text() + e.data.msg);
    });
    //イベントハンドラを解除する
    $('.main .button').on('click', function(e){
        $('table').off('click','td',doclick);
    });
 
    // イベントを発火する
    $('.main1 input').on('focus', function(e){
        $('.desc').append($(e.target).val() + '<br>');
    });

    $('.main1 .button').on('click', function(e){
        $('input:last').triggerHandler('focus');
    });


});