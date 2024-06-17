$(function () {
    $("a").mouseenter(function () {
        $(".parrafo").css({ "color": "rgb(0, 0, 0)", "text-shadow": " 0 0 8px white" });
    });
    $("a").mouseleave(function () {
        $(".parrafo").css({ "color": "rgb(255, 255, 255)"});
    });
});