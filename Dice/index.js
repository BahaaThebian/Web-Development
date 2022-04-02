var randomNumber1=6*Math.random();
randomNumber1=1+Math.floor(randomNumber1);
console.log(randomNumber1);
var img1Name= "images/dice"+randomNumber1+".png";
console.log(img1Name);
document.querySelector(".img1").setAttribute("src",img1Name);
var randomNumber2=6*Math.random();
randomNumber2=1+Math.floor(randomNumber2);
console.log(randomNumber2);
var img2Name= "images/dice"+randomNumber2+".png";
console.log(img2Name);
document.querySelector(".img2").setAttribute("src",img2Name);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 WINS!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 WINS!";
}
else{
  document.querySelector("h1").textContent="DRAW!";

}
