let correctNumber = getRandomNumber();
let guesses = [];



window.onload = function(){
    let name = prompt("Hi there,\n What's your Name?");
    alert("Hey " + name + ", \nLet's play a game.\nHint: I have a number between 1 to 100. Please guess the number what I have.");
    document.getElementById("submit-number").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}
// Play Game
function playGame(){
    let numberGuess = document.getElementById('number-guess').value;
    if(numberGuess == ""){
        showEmptyWarning()
    }else{
        displayResult(numberGuess);
        saveHistory(numberGuess);
        displayHistory();
    }
    
}
// Restart Game
function initGame(){
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
    document.getElementById('number-guess').value = "";
}
// Random Number Generate
function getRandomNumber(){
    let randNum = Math.floor(Math.random()*100 + 1);
    return randNum;
}
// Diplay game Result
function displayResult(numberGuess){
    if(correctNumber > numberGuess){
        showLow();
    }else if(correctNumber < numberGuess){
        showHigh();
    }else{
        showWon();
    }
}

// Show Result Alert
function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>";
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>";
            break;
        case "empty":
            dialog = "<div class='alert alert-danger' role='alert'>";
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showEmptyWarning(){
    const text = "Empty Field! Please input a number.";
    const dialogType = "empty";
    let dialog = getDialog(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

function showWon(){
    const text = "Awesome job, you got it!";
    const dialogType = "won";
    let dialog = getDialog(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

function showHigh(){
    const text = "Your guess is too high! Again guess.";
    const dialogType = "warning";
    let dialog = getDialog(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

function showLow(){
    const text = "Your guess is too low! Again guess.";
    const dialogType = "warning";
    let dialog = getDialog(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

// History Save and Display
function saveHistory(guess){
    guesses.push(guess);
}

function displayHistory(){
    let i = guesses.length-1;
    let list = "<ul class='list-group my-5 mx-5'>";
    while(i >= 0){
        list += "<li class='list-group-item'>You guessed " + guesses[i] + "</li>";
        i--;
    }
    list += "</ul>"

    document.getElementById("history").innerHTML = list;
}