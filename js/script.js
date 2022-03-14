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
    // portfolio
    $(".img_w4").hover(function () {
        $("#lay1").toggle();
        
    });
    $(".img_w3").hover(function () {
        $("#lay2").toggle();
        
    });
        
    $(".img_w2").hover(function () {
        $("#lay3").toggle();
        
    });
        
    $(".img_w1").hover(function () {
        $("#lay4").toggle();
        
    });
    $(".img_w5").hover(function () {
        $("#over1").toggle();
        
    });
    $(".img_w6").hover(function () {
        $("#over2").toggle();
        
    });
        
    $(".img_w7").hover(function () {
        $("#over3").toggle();
        
    });
        
    $(".img_w8").hover(function () {
        $("#over4").toggle();
        
    });
        
});
// form
document.querySelector("#formData").onsubmit=(e)=>{
    const name=document.querySelector("#names").value;

e.preventDefault()
    if (name==""){
        alert('Please enter your name');
    }else{
        alert(`Hello,${name}.\n We have received your message.Thank you for contacting us`)
    }

};