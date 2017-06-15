$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();

// Анимация с диаграмой
$(function(){

    var ArrowDeg = Math.floor((Math.random()*180)+0);  // Градус поворота стрелки
    var Shift = 6 ;                                   // Увеличивает секцию на значение в px
    var DefaultShift = {'transform': ''};             //transform: translate по умолчанию


    $(".cls-5").css({"transform": 'rotate('+ArrowDeg+'deg)'}); // Поворачивает стрелку


// Здает рандомное число процентов от min до max заданых чисел
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand + '%';
  };

// Изминение процентов и сдвиг секция при (n) градусов стрелки
    if( ArrowDeg <= 57 ) {
            $("svg.cls-1").css({'transform': 'translateX(-'+Shift+'px)'});
            $("svg.cls-2").css(DefaultShift);
            $("svg.cls-3").css(DefaultShift);
            $("span.skill-js__level-number").html(randomInteger(0, 33));

    } else if ( ArrowDeg >= 58 && ArrowDeg <=125){
            $("svg.cls-2").css({'transform': 'translateY(-'+Shift+'px)'});
            $("svg.cls-1").css(DefaultShift);
            $("svg.cls-3").css(DefaultShift);
            $("span.skill-js__level-number").html(randomInteger(34, 66));

    } else if ( ArrowDeg >= 126 && ArrowDeg <=180){
            $("svg.cls-3").css({'transform': 'translateX('+Shift+'px)'});
            $("svg.cls-1").css(DefaultShift);
            $("svg.cls-2").css(DefaultShift);
            $("span.skill-js__level-number").html(randomInteger(67, 100));
    }

    setTimeout(arguments.callee, 1000)
});


});