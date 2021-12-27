var randomNumer1 = Math.floor(Math.random() * 6) + 1;
var randomNumer2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice"
                               + randomNumer1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"
                               + randomNumer2 + ".png");

if (randomNumer1 > randomNumer2) {
  document.querySelector("h1").innerText = "Player1 Wins!"
}
else if (randomNumer1 < randomNumer2) {
  document.querySelector("h1").innerText = "Player2 Wins!"
}
else {
  document.querySelector("h1").innerText = "Draw!"
}
