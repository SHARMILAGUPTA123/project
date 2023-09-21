var x= document.getElementById("b");
x.addEventListener("click",makesound);
function makesound()
{

    var audio=new Audio('photos/b.mp3');
    audio.play();
}
