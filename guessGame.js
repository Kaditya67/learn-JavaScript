let winningNumber = Math.trunc(Math.random() * 20) + 1;

let userGuess = +prompt("Guess a number between 1 and 20"); //+number convert string to number
if(userGuess==winningNumber){
    alert("You won!");
}else{
    alert("You lost!");
}
console.log(typeof userGuess, userGuess);
