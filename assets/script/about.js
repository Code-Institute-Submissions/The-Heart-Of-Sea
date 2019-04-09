$(document).ready(function () {

    // Show About Para 
    $(".aboutShowBtn").click(function () {
        $("#aboutHidden").removeClass("hidden");
        $(".aboutShowBtn").addClass("hidden");
        $(".aboutHideBtn").removeClass("hidden");
    });

    // Hide About Para 

    $(".aboutHideBtn").click(function () {
        $("#aboutHidden").addClass("hidden");
        $(".aboutShowBtn").removeClass("hidden");
        $(".aboutHideBtn").addClass("hidden");
    });

});