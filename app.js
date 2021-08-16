const gameboard = (function () {
    const gameboardArray = ["", "", "", "", "", "", "", "", ""];
    const render = () => {
        for(let i = 0; i < gameboardArray.length; i++) {
            let gridBox = document.getElementById(`grid-${i}`);
            gridBox.innerHTML = `<p>${gameboard.gameboardArray[i]}</p>`;
        }
    };
    const status = document.getElementById("update-status");
    const resetButton = document.getElementById("new-game-button");
    resetButton.addEventListener("click", () => {
        for(let i=0; i < gameboardArray.length; i++) {
            gameboardArray[i] = "";
        }
        render();
        playGame.addListeners();
        status.textContent = "WHO WILL WIN? NO ONE KNOWS!";
    })
    return {gameboardArray, render};
})();

const player = (name, letter) => {
    return {name, letter};
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

const playGame = (() => {
    const gameboardArray = gameboard.gameboardArray;
    let currentPlayer = player1;
    let letter = ""
    const playRound = (e) => {
        const gridIndex = gameboardArray[`${e.target.dataset.indexNumber}`];
        if(letter === "") {
            letter = player1.letter;
            if(gridIndex === "") {
                gameboardArray.splice(`${e.target.dataset.indexNumber}`, 1, letter)
            }
            removeListener(e);
        }
        else if(letter === player1.letter) {
            letter = player2.letter;
            currentPlayer = player2.name;
            if(gridIndex === "") {
                gameboardArray.splice(`${e.target.dataset.indexNumber}`, 1, letter)
            }
            removeListener(e);
        }
        else if(letter === player2.letter) {
            letter = player1.letter;
            currentPlayer = player1.name;
            if(gridIndex === "") {
                gameboardArray.splice(`${e.target.dataset.indexNumber}`, 1, letter)
            }
            removeListener(e);
        }
        gameboard.render();
        checkWin();
    }

    const status = document.getElementById("update-status");
    function checkWin() {
        if(gameboardArray[0] === gameboardArray[1] && gameboardArray[1] === gameboardArray[2] && gameboardArray[0] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[3] === gameboardArray[4] && gameboardArray[4] === gameboardArray[5] && gameboardArray[3] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[6] === gameboardArray[7] && gameboardArray[7] === gameboardArray[8] && gameboardArray[6] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[0] === gameboardArray[3] && gameboardArray[3] === gameboardArray[6] && gameboardArray[0] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[1] === gameboardArray[4] && gameboardArray[4] === gameboardArray[7] && gameboardArray[1] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[2] === gameboardArray[5] && gameboardArray[5] === gameboardArray[8] && gameboardArray[2] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[0] === gameboardArray[4] && gameboardArray[4] === gameboardArray[8] && gameboardArray[0] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[2] === gameboardArray[4] && gameboardArray[4] === gameboardArray[6] && gameboardArray[2] !== ""){status.textContent = `${currentPlayer} wins!`; letter = ""; return;}
        if(gameboardArray[0] !== "" && gameboardArray[1] !== "" && gameboardArray[2] !== "" && gameboardArray[3] !== "" && gameboardArray[4] !== "" && gameboardArray[5] !== "" && gameboardArray[6] !== "" && gameboardArray[7] !== "" && gameboardArray[8] !== "") {status.textContent = "DRAW!"; letter = ""; return;}
    }

    const gridBoxes = Array.from(document.getElementsByClassName("game-grid"));

    function addListeners() {
        gridBoxes.forEach((gridBox) => gridBox.addEventListener("click", playRound));
    };
    addListeners();

    const removeListener = (e) => {
        e.target.removeEventListener("click", playRound);
    };
    return {addListeners};
})();

