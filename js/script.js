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
// form
document.querySelector("#formData").onsubmit=()=>{
    const name=document.querySelector("#names").value;

    if (name==""){
        alert('Please enter your name');
    }else{
        alert(`Hello,${name}.\n We have received your message.Thank you for contacting us`)
    }
};