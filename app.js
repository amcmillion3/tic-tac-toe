const gameboard = (function () {
    const gameboardArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    return {gameboardArray};
})();

const player = (name, letter) => {
    return {name, letter};
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

console.log(player1);


const render = () => {
    for(let i = 0; i < gameboard.gameboardArray.length; i++) {
        let gridBox = document.getElementById(`grid-${i}`);
        gridBox.innerHTML = `<p>${gameboard.gameboardArray[i]}</p>`;
    }
}

render();