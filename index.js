let randomNumber1;
let randomNumber2;

function getRandomNumber1() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    return randomNumber1;
}

function getRandomNumber2() {
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    return randomNumber2;
}

    randomNumber1 = getRandomNumber1();
    randomNumber2 = getRandomNumber2();

if (randomNumber1 == 1) {
    document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
} else if (randomNumber1 == 2) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 == 3) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 == 4) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 == 5) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
} else if (randomNumber1 == 6) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
}


if (randomNumber2 == 1) {
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
} else if (randomNumber2 == 2) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 == 3) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 == 4) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 == 5) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 == 6) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
}


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player Two Wins!";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}