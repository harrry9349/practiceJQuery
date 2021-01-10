$(document).ready(function(){

    // ボタンをクリックするとイベント「click」を検知する
    $('.main1 button').on('click',function(e){
        console.log('イベント「'+ e.type + '」を検知しました。');
        console.log('イベント「'+ e.currentTarget + '」を検知しました。');
        console.log('イベント「'+ e.data + '」を検知しました。');
        console.log('イベント「'+ e.delegateTarget + '」を検知しました。');
        console.log('イベント「'+ e.metaKey + '」を検知しました。');
        console.log('イベント「'+ e.namespace + '」を検知しました。');
        console.log('イベント「'+ e.pageX + '」を検知しました。');
        console.log('イベント「'+ e.pageY + '」を検知しました。');
        console.log('イベント「'+ e.relatedTarget + '」を検知しました。');
        console.log('イベント「'+ e.result + '」を検知しました。');
        console.log('イベント「'+ e.target + '」を検知しました。');
        console.log('イベント「'+ e.timeStamp + '」を検知しました。');
        console.log('イベント「'+ e.which + '」を検知しました。');
    });

    $('.main2 a').on('click',function(e){
        // イベントのデフォルト動作を停止する
        alert('リンクがクリックされました')
        e.preventDefault();
        console.log(e.isDefaultPrevented());
        // 親要素へのイベント伝播を停止する
        e.stopPropagation();
        console.log(e.isPropagationStopped());
    });

    //ボタン「ネコ族以外」をクリックする
    $('.main3 button').on('click',function(){
        alert('ボタン「ネコ族以外」がクリックされました');
        $('.main4 button').trigger('click');
    });

    //ボタン「ネコ族以外」をクリックする
    $('.main5 button').on('dblclick',function(){
        alert('ボタン「ネコ族以外」がダブルクリックされました');
        $('.main4 button').dblclick(); // .trigger('dblclick)の短縮形
    });

    // ネコ族以外クリック
    $('.main4 button').on('click',function(){
        $('li > div').has('.notcat').css('backgroundColor','red').css('color','white');
    });

    // ネコ族以外ダブルクリック
    $('.main4 button').on('dblclick',function(){
        $('li > div').has('.notcat').css('backgroundColor','blue').css('color','white');
    });

    // マウスカーソルを当てると位置を表示する
    $('.mouseground').on('mousemove',function(e){
        $(e.currentTarget).css('backgroundColor','red').css('color','white');
        $(e.currentTarget).css('height','500px').css('width','500px');
        $(e.currentTarget).text('pageX=' + e.pageX + 'pageY=' + e.pageY);
    });

    // マウスボタンを押すとメッセージを表示する
    $('.mouseground').on('mousedown',function(e){
        $(e.currentTarget).text('マウスボタンを押しています');
    });    

    // マウスカーソルをメッセージを表示する
    $('.main7 .outercage')
    .on('mouseenter',function(){
        $('.outercage').css('backgroundColor','red').css('color','white');
        $('.innercage').css('backgroundColor','white').css('color','black');
        $('.outercage').css('height','500px').css('width','500px');
        $('.innercage').css('height','250px').css('width','250px');
        $('.desc').append('遊びに来たよ！<br>');
    })
 
    .on('mouseleave',function(){
        $('.desc').append('帰るよ！<br>');
    });   

    $('.main7 .innercage')
    .on('mouseenter',function(){
        $('.desc').append('捕まった！<br>');
    })
 
    .on('mouseleave',function(){
        $('.desc').append('逃げた！<br>');
    });   
 
 
});