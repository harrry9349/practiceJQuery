$(document).ready(function(){
    $('.post-date').on('click',function(){
        $("article").append("追加：おしゃれなカフェで癒されてみませんか？　無添加の食材で身体の中からリフレッシュ。ブレンドコーヒーとヘルシーなオーガニックフードを提供するカフェ。<br>");
    });

    $('.sub-title').on('click',function(){
        let dH = $(document).height();
        let wH = $(window).height();
        console.log(dH);
        console.log(wH);
    });

});
