console.log("Panda");
let panda = document.querySelector("img.panda");
let fu = document.querySelector("img.fu");

let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener("click", pandaclicked);

function pandaclicked() {
    console.log("Fly panda, fly!");
    panda.classList.toggle("pandaShake");
    fu.classList.toggle("fuShake");
}

let fadeButton = document.querySelector("#fade");
fadeButton.addEventListener("click", fadeClicked);

function fadeClicked() {
    console.log("Catch me if you can");
    fu.classList.toggle("fuFade");
    panda.classList.toggle("kungFade");

}
let jumpButton = document.querySelector("#jump");
jumpButton.addEventListener("click", jumpClicked);

function jumpClicked() {
    console.log("Happy Pandas");
    fu.classList.toggle("fuJump");
    panda.classList.toggle("kungJump");
    audi.play();

}
let gotHitButton = document.querySelector("#gotHit");
gotHitButton.addEventListener("click", gotHitButtonClicked);

function gotHitButtonClicked() {
    console.log("Tummy pillow");
    fu.classList.toggle("fuGotHit");
    panda.classList.toggle("kungGotHit");

}
let fallButton = document.querySelector("#fall");
fallButton.addEventListener("click", fallButtonClicked);

function fallButtonClicked() {
    console.log("Slippery Pathway");
    fu.classList.toggle("fuFall");
    panda.classList.toggle("kungFall");

}
let moveInButton = document.querySelector("#moveTo30");
moveInButton.addEventListener("click", moveInButtonClicked);

function moveInButtonClicked() {
    console.log("Here I am");
    fu.classList.toggle("fuMoveIn");
    panda.classList.toggle("kungMoveIn");

}
let moveOutButton = document.querySelector("#moveFrom30");
moveOutButton.addEventListener("click", moveOutButtonClicked);

function moveOutButtonClicked() {
    console.log("Hello, and Goodbye");
    fu.classList.toggle("fuMoveOut");
    panda.classList.toggle("kungMoveOut");

}
let moveButton = document.querySelector("#moveTo0");
moveButton.addEventListener("click", moveButtonClicked);

function moveButtonClicked() {
    console.log("Hello, and Goodbye");
    fu.classList.toggle("fuMove");

}
let explodeButton = document.querySelector("#explode");
explodeButton.addEventListener("click", explodeButtonClicked);


function explodeButtonClicked() {
    console.log("It`s becoming dagerous");
    fu.classList.toggle("fuGotHit");
    panda.classList.toggle("kungGotHit");
    fu.classList.toggle("explodeFu");
    panda.classList.toggle("explode");
}
let button = document.querySelector("#out");
button.addEventListener("click", buttonClicked);

function buttonClicked() {
    console.log("Carousel");
    panda.classList.toggle("moveOut");
    fu.classList.toggle("moveOutFu");


}
let soundButton = document.querySelector("#explodeSound");
soundButton.addEventListener("click", soundButtonClicked);
let audio = document.querySelector(".bomb");
let audi = document.querySelector(".happy");


function soundButtonClicked() {
    console.log("It`s becoming dagerous");
    fu.classList.toggle("fuGotHit");
    panda.classList.toggle("kungGotHit");
    fu.classList.toggle("explodeSound");
    panda.classList.toggle("kungExplode");
    audio.play();
    audio.addEventListener("ended", startAgain);

    function startAgain() {
        console.log("Just Kidding");
        fu.classList.toggle("fuJump");
        panda.classList.toggle("kungJump");
        audi.play();

    }

}
