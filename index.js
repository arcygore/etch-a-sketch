function createBoard() {
    boardArea = document.querySelector('.board');
    for (let i = 1; i <=16; i++) {
        block = document.createElement('div');
        block.className  = 'board-block';
        boardArea.appendChild(block);
    }
}

createBoard();