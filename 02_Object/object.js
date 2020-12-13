$(document).ready(function(){
    // $().append();
    // $().append(function(){});

    // ヘッダブロックうちの最後に区切り線を挿入する
    $('.header').append('<hr>');
    // 要素の内容に応じた説明を要素内の最後に挿入する
    $('div.sticky').append(function(){
        return '<span>これは「'+　$(this).text() + '」の付箋です</span>';
    });
    // 要素の内容に応じた説明を要素内の最後に挿入する
    $('.sticky').append($('h3'));

    //$().appendTo();
    //コンテンツブロック内の最後に付箋のdivを１つ挿入する
    $('<div class="sticky"><p>ごみ捨て</p></div>').appendTo($('.content'));

    //$().prepend();
    //$().prepend(function(){});
    //ヘッダブロックの先頭に一文挿入する
    $('.header').prepend($('<p>jQuery3対応</p>'));

    //$().prependTo();
    //指定したdiv要素内の先頭に段落要素(<p>)を挿入する
    $('<p>jQuery3対応</p>').prependTo($('.content'));

});