$(document).ready(function(){

    let callbacks = $.Callbacks();

    let myfunc1 = function(str){
        alert(str);
    }

    $('button[name=button1]').on('click',function(){

        callbacks.add(myfunc1);

        $('.desc').append('コールバックが追加されました<br>');

        $('.desc').append('fired?:'+ callbacks.fired() + '<br>');
        $('.desc').append('disabled?:'+ callbacks.disabled() + '<br>');
        $('.desc').append('locked?:'+ callbacks.locked() + '<br>');

    });

    $('button[name=button2]').on('click',function(){

        callbacks.fire('実行されました');

        $('.desc').append('fired?:'+ callbacks.fired() + '<br>');
        $('.desc').append('disabled?:'+ callbacks.disabled() + '<br>');
        $('.desc').append('locked?:'+ callbacks.locked() + '<br>');

    });  
    
    $('button[name=button3]').on('click',function(){

        callbacks.fireWith($('.desc2'),['実行されました']);

        $('.desc2').append('fired?:'+ callbacks.fired() + '<br>');
        $('.desc2').append('disabled?:'+ callbacks.disabled() + '<br>');
        $('.desc2').append('locked?:'+ callbacks.locked() + '<br>');
    }); 

    $('button[name=button4]').on('click',function(){
        callbacks.disable();
        $('.desc').append('コールバックが無効化されました<br>');
        $('.desc').append('disabled?:'+ callbacks.disabled() + '<br>');
    });

    $('button[name=button5]').on('click',function(){
        callbacks.lock();
        $('.desc').append('コールバックが固定されました<br>');
        $('.desc').append('locked?:'+ callbacks.locked() + '<br>');
    });

    $('button[name=button6]').on('click',function(){
        
        callbacks.add(myfunc1);

        $('.desc').append('コールバックが再度追加されました<br>');

        $('.desc').append('fired?:'+ callbacks.fired() + '<br>');
        $('.desc').append('disabled?:'+ callbacks.disabled() + '<br>');
        $('.desc').append('locked?:'+ callbacks.locked() + '<br>');
    });
});
