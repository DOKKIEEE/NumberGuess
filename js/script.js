let generateBtn = document.querySelector("#generateNum");
generateBtn.addEventListener("click", generateNewNum);

let inputNum = document.querySelector("#inputNum");

function generateNewNum() {
    // random number
    var randomNum = Math.ceil(Math.random()*10);

    generateBtn.setAttribute("disabled", "");
    inputNum.removeAttribute("disabled", "");

    // guess number
    let guessBtn = document.querySelector("#guessBtn");
    guessBtn.addEventListener("click", guessNum);
    guessBtn.removeAttribute("disabled", "");

    let gameStart = document.createElement("h1");
    gameStart.textContent = "Guess Now!";
    gameStart.classList = "gameStart";

    ansDisplay.appendChild(gameStart);

    function guessNum() {
        let inputNum = document.querySelector("#inputNum").value;

        let ansDisplay = document.querySelector("#ansDisplay");
        let options = document.querySelector("#options");

        let hiddenNum = document.createElement("h3");
        hiddenNum.textContent = "THE ANSWER IS " + randomNum;
        hiddenNum.style.color = "#39FF14";
        hiddenNum.classList  = "hiddenNum";

        let wrongAnsHigher = document.createElement("h3");
        wrongAnsHigher.textContent = "Higher";
        wrongAnsHigher.style.color = "#39FF14";
        wrongAnsHigher.classList = "h3";

        let wrongAnsLower = document.createElement("h3");
        wrongAnsLower.textContent = "Lower";
        wrongAnsLower.style.color = "red";
        wrongAnsLower.classList = "wrongAnsLower";

        let correctAns = document.createElement("h3");
        correctAns.textContent = "Perfect!";
        correctAns.style.color = "#FEE440";
        correctAns.classList = "correctAns";

        let = gameOver = document.createElement("h3");
        gameOver.textContent = "Game Over";
        gameOver.style.color = "red";
        gameOver.classList = "gameOver";

        let = congrats = document.createElement("h3");
        congrats.textContent = "Congratulation!";
        congrats.style.color = "#9B5DE5";
        congrats.classList = "win";

        let playAgain = document.createElement("button");
        playAgain.textContent = "RESTART";
        playAgain.type = "submit";
        playAgain.classList = "playAgain my-2";
        playAgain.addEventListener("click", restartGame);

        var childNum = document.querySelector("#ansDisplay").childElementCount;
        var limit = 2;

        gameStart.remove();

        function restartGame() {
            ansDisplay.removeChild(ansDisplay.lastElementChild);
            generateBtn.removeAttribute("disabled", "");
            playAgain.remove();

            window.location.reload()
        }

        if (randomNum != inputNum && randomNum > inputNum) {
            ansDisplay.appendChild(wrongAnsHigher);
        } else if(randomNum != inputNum && randomNum < inputNum) {
            ansDisplay.appendChild(wrongAnsLower);
        } else if (randomNum == inputNum) {
            console.log("correct")
            ansDisplay.appendChild(correctAns);
            ansDisplay.appendChild(congrats);
            ansDisplay.appendChild(hiddenNum);
            options.appendChild(playAgain);
            guessBtn.setAttribute("disabled", "");
        }

        if (childNum > limit && randomNum == inputNum) {
            ansDisplay.appendChild(congrats);
            options.appendChild(playAgain);
            guessBtn.setAttribute("disabled", 
            "");
            ansDisplay.appendChild(hiddenNum);
            ansDisplay.removeChild(lastElementChild);   
        }

        if (childNum > limit && randomNum != inputNum) {
            ansDisplay.appendChild(gameOver);
            options.appendChild(playAgain);
            guessBtn.setAttribute("disabled", 
            "");
            ansDisplay.appendChild(hiddenNum);
        }
    }
}
