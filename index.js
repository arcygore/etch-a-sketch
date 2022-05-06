function createBoard() {
    boardArea = document.querySelector('.board');
    for (let i = 1; i <=16; i++) {
        block = document.createElement('div');
        block.className  = 'board-block';
        boardArea.appendChild(block);
    }
    return block = document.querySelectorAll('.board-block');
}

function colorChange(block) {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', function() {
            block[i].style.backgroundColor = 'blue';
        })
    }
}



let bl = createBoard();
colorChange(bl);