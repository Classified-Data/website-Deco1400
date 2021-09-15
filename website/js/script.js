$(document).ready(function() {

    $("button").click(function() {
        alert("Thank you for your feedback!");
    });


    $("#page-footer").hover(function() {
        $(this).css('background-color', 'rgb(108, 13, 197)');
    }).mouseout(function() {
        $(this).css('background-color', 'rgb(115, 115, 115)');
    });

    $(window).resize(function() {

        var w = $(window).width();
        if (w < 700) {
            $("#form").css({ "width": "50%" })
        } else {
            $("#form").css({ "size": "300%" })
        }
    });

});