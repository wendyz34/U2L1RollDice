const dice1 = document.querySelector("#btn1");
const dice2 = document.querySelector("#btn2");
const text = document.querySelector("#text");

dice1.addEventListener("click", rollDice1);
dice2.addEventListener("click", rollDice2);

let d1 = 0;
let d2 = 0;

function rollDice1(){
     // Assign random value 1-6
     d1 = Math.floor((Math.random() * 6) + 1);
     // Change dice content when clicked
     dice1.textContent = `Dice1: ${d1}`;
     total();
}
function rollDice2(){
    d2 = Math.floor((Math.random() * 6) + 1);
    dice2.textContent = `Dice2: ${d2}`;
    total();
}
function total() {
    // Display total
    const total = d1 + d2;
    text.textContent = `Total Value: ${total}`;
}
