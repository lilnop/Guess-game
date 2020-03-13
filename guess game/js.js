let randomNumber = Math.floor(Math.random() * 49 + 1);

let displayNumber = document.querySelector(".display-number");
let check = document.querySelector("#check");
let displayMessage = document.querySelector(".display-message");

let wrong = document.querySelector("#wrong");
let correct = document.querySelector(".right");
// displayNumber.textContent = randomNumber;


check.addEventListener("click",() => {
    let answer = parseInt(document.querySelector(".answer").value);

    if (answer !== randomNumber && answer > randomNumber){
        wrong.style.visibility = "visible";
        displayMessage.textContent = "Wrong,guess again by trying a lower number";

        

    }else if(answer !== randomNumber && answer < randomNumber){
        displayMessage.textContent = "Wrong,guess again by trying a greater number";
        wrong.style.visibility = "visible";
        // wrong.classList.add("shake");
        wrong.classList.toggle("shake");
    }
    else if (isNaN(answer)){
        displayMessage.textContent = "Enter a valid number";
    }
    else{
        displayMessage.textContent = "Correct, you guessed the number correctly! Refresh the page to start over";
        wrong.style.visibility = "hidden";
        correct.style.visibility = "visible";
    }
    })


 
