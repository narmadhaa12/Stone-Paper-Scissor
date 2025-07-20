var imageNames = ["stone","paper","scissor"];
var level = 0;

$(".btn").on("click",function(){

    var choseButton = $(this).attr("id");
    $(".img1").attr("src","./image/"+choseButton+".webp");
    $(".img1").fadeIn(100).fadeOut(100).fadeIn(100);

    setTimeout(function(){
        var randomImage = Math.floor(Math.random()*3);
        var randomChosenImage = imageNames[randomImage];       
        $(".img2").attr("src","./image/"+randomChosenImage+".webp");
        $(".img2").fadeIn(100).fadeOut(100).fadeIn(100);
        levelIncreament();
        $("h1").text("Level " + level+"-"+Winner(choseButton, randomChosenImage));
    },2000);    
})
function levelIncreament(){
    level++;
}
$(document).keypress(function(){
    $("h1").text("Game Starts.")
    if(!started){
        $("h1").text("Game Starts.")
        started = true;
        levelIncreament();
        $("h1").text("Level "+level);
    }
});
function Winner(user, computer){
    if(user === computer){
        return"TIE";
    }
        if((user ==="stone"&& computer==="scissor")||
            (user ==="paper"&& computer==="stone")||
            (user ==="scissor"&& computer==="paper")
        ){
            return "YOU"
        }
        return "COMPUTER"
}