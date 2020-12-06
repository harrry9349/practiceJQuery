// jQuery. = $.

// h1 h2 h3 p のcss情報を設定
jQuery("h1").css("color","red");
$("h2").css({"color":"blue","text-align":"center"});
$("h3").css("margin", "100px 0 420px");
$("p").css("font-size","2.5rem");

// h1 h2 h3 p のcss情報を取得
console.log($("h1").css("color"));
console.log($("h2").css("color"));
console.log($("h2").css("text-align"));
console.log($("h3").css("margin"));
console.log($("p").css("font-size"));