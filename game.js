/* game page javascript */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();





$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $(".one").show();
    $(".one1").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img1").click(function(){
        $("#img1").hide();
        $("#img2").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img2").click(function(){
        $("#img1").show();
        $("#img2").hide();
    });
});