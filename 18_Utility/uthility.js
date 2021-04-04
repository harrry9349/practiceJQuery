$(document).ready(function(){

    $('.button1').on('click',function(){
        $('#result').val($.trim($('#paragraph').val()));
    });

    $('.button2').on('click',function(){
        let arry1 = [$('#arr1').val(),$('#arr2').val(),$('#arr3').val()];
        let arry2 = [$('#arr4').val(),$('#arr5').val(),$('#arr6').val()];
        $.merge(arry1,arry2);
        $('.desc').append(arry1.toString() + '<br>');
    });

    $('.button3').on('click',function(){
        let arry1 = [$('#arr1').val(),$('#arr2').val(),$('#arr3').val(),$('#arr4').val(),$('#arr5').val(),$('#arr6').val()];
        let arry2 = $.map(arry1,function(n,i){
            if(i % 2 == 0){
                return n + 'words';
            }
        });
        $('.desc').append(arry2.toString() + '<br>');
    });

    $('.button4').on('click',function(){
        let arry1 = [$('#arr1').val(),$('#arr2').val(),$('#arr3').val(),$('#arr4').val(),$('#arr5').val(),$('#arr6').val()];
        let arry2 = $.grep(arry1,function(n,i){
            if(n.length  >= 5){
                return true;
            }
        });
        $('.desc').append(arry2.toString() + '<br>');
    });   

    $('.button5').on('click',function(){
        let arry1 = [$('#arr1').val(),$('#arr2').val(),$('#arr3').val(),$('#arr4').val(),$('#arr5').val(),$('#arr6').val()];
        $.each(arry1,function(){
            $('.desc').append(this.toString() + '<br>');
        });
        
    });   
});
