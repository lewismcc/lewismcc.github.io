/*
This animation makes the mercedes svg image fade in and out
*/
$(document).ready(function () {
    $(".m-logo").click(function () {
        console.log("running")
        $(".m-logo").animate({
            opacity: ".01"
        }, 2500)
        $(".m-logo").animate({
            opacity: "1"
        }, 2500)
    })
})