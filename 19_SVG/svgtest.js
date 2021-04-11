$(document).ready(function(){

    $('.button1').on('click',function(){
        let stage = Snap('#mySVG3');
        let box = stage
        .circle(100, 100, 50)
        .attr({ fill: "#f06",'stroke': '#333' });
        box.animate({
            'fill': '#f1cc23',
            'stroke': '#333',
            'r': 90
        }, 1000);

    });

    $('.button2').on('click',function(){
        var stage = Snap('#mySVG4');
        var circle = stage.circle(50,50,50).attr({fill:'#888'});
        var text = stage.text(0,50,'ドラッグ！').attr({fill:'#fff'});
        var elements = stage.group(circle,text);
        
        elements.drag();
    });

});
