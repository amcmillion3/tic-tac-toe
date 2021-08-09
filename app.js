const gameboard = (function () {
    // const gameboardArray = ["", "", "", "", "", "", "", "", ""]; //Array to be used when playGame functionality works
    const gameboardArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    const render = () => {
        for(let i = 0; i < gameboard.gameboardArray.length; i++) {
            let gridBox = document.getElementById(`grid-${i}`);
            gridBox.innerHTML = `<p>${gameboard.gameboardArray[i]}</p>`;
        }
    };
    return {gameboardArray, render};
})();

gameboard.render(); // This to be removed once playGame functionality works

const player = (name, letter) => {
    return {name, letter};
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

const playGame = () => {
    let currentPlayer = player1;
    let letter = ""
    const playRound = (e) => {
        if(letter === "") {
            let gridIndex = `e.target.id`;
        }
    }
}
