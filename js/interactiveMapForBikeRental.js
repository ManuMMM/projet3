"use strict";

//------------------------------------------------------------------
//---------- Slider properties -------------------------------------
//------------------------------------------------------------------

var activeSlide = 1;

$(".controls").on("click", ".button-next", function () {
    switch (activeSlide) {
    case 1:
        $("#slide1").removeClass("slide-active");
        $("#slide2").addClass("slide-active");
        activeSlide += 1;
        break;
    case 2:
        $("#slide2").removeClass("slide-active");
        $("#slide3").addClass("slide-active");
        activeSlide += 1;
        break;
    case 3:
        $("#slide3").removeClass("slide-active");
        $("#slide4").addClass("slide-active");
        activeSlide += 1;
        break;
    case 4:
        $("#slide4").removeClass("slide-active");
        $("#slide5").addClass("slide-active");
        activeSlide += 1;
        break;
    case 5:
        $("#slide5").removeClass("slide-active");
        $("#slide1").addClass("slide-active");
        activeSlide = 1;
        break;
    default:
        //code block
    }
});

$(".controls").on("click", ".button-previous", function () {
    switch (activeSlide) {
    case 1:
        $("#slide1").removeClass("slide-active");
        $("#slide5").addClass("slide-active");
        activeSlide = 5;
        break;
    case 2:
        $("#slide2").removeClass("slide-active");
        $("#slide1").addClass("slide-active");
        activeSlide -= 1;
        break;
    case 3:
        $("#slide3").removeClass("slide-active");
        $("#slide2").addClass("slide-active");
        activeSlide -= 1;
        break;
    case 4:
        $("#slide4").removeClass("slide-active");
        $("#slide3").addClass("slide-active");
        activeSlide -= 1;
        break;
    case 5:
        $("#slide5").removeClass("slide-active");
        $("#slide4").addClass("slide-active");
        activeSlide -= 1;
        break;
    default:
        //code block
    }
});

//$("button-next").on
