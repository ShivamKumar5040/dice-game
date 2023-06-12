var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;
console.log(p1,p2);
if(p1>p2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}else if(p1<p2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}else{
    document.querySelector("h1").innerHTML="Draw!"
}
document.querySelector(".first").src = "./images/dice"+p1+".png";
document.querySelector(".second").src = "./images/dice"+p2+".png";