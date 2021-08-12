const gameboard = (function () {
    const gameboardArray = ["", "", "", "", "", "", "", "", ""];
    const render = () => {
        for(let i = 0; i < gameboardArray.length; i++) {
            let gridBox = document.getElementById(`grid-${i}`);
            gridBox.innerHTML = `<p>${gameboard.gameboardArray[i]}</p>`;
        }
    };
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
    }
    const gridBoxes = Array.from(document.getElementsByClassName("game-grid"));

    const addListeners = (() => {
        gridBoxes.forEach((gridBox) => gridBox.addEventListener("click", playRound));
    })();

    const removeListener = (e) => {
        e.target.removeEventListener("click", playRound);
    };
})();
