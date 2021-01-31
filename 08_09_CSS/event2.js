$(document).ready(function(){


    $('p').height(function(){
        return($(this).index() + 1) * 50;
    });

    $('p').width(function(){
        return($(this).index() + 1) * 100;
    });

    $('p').on('click',function(){
        let pH = $(this).height();   
        let pW = $(this).width();
        $('.main-inner').append('p要素の高さは'+pH+'pxです。<br>');
        $('.main-inner').append('p要素の幅は'+pW+'pxです。<br>');
    });
});
