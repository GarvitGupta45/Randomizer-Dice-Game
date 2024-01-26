var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").style.fontSize = "7rem";
    document.querySelector("h1").textContent = "🚩 Player 1 Won..";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").style.fontSize = "7rem";
    document.querySelector("h1").textContent = "Player 2 Won.. 🚩";
} else {
    document.querySelector("h1").style.fontSize = "6.4rem";
    document.querySelector("h1").textContent = "🤡 Match Drawn 🤡";
}