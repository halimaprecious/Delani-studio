// what we do code
$(document).ready(function () {
    $(".design").click(function () {
        $("#imgdesign").toggle();
        $("#pdesign").toggle();
    });
    $(".dev").click(function () {
        $("#img-dev").toggle();
        $("#devp").toggle();
    });
    $(".product").click(function () {
        $("#img-prod").toggle();
        $("#manp").toggle();
    });
});