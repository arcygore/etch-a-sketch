let mousePos = {x:0, y:0};

function createBoard() {
    boardArea = document.querySelector('.board');
    for (let i = 1; i <=16; i++) {
        block = document.createElement('div');
        block.className  = 'board-block';
        boardArea.appendChild(block);
    }
    return block = document.querySelectorAll('.board-block');
}

function draw(block) {}

function colorChange(block) {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', function() {
            block[i].style.backgroundColor = 'blue';
        })
    }   
}


// function colorChange2(block) {
    // for (let i = 0; i < block.length; i++) {
    //     block[i].addEventListener('mousemove', function(e) {
    //         let xPos = e.offsetX;
    //         let yPos = e.offsetY;
    //         console.log(`${xPos}, ` + ` ${yPos}`)
    //         drawn = document.createElement('div');
    //         drawn.className = '.drawn';
    //         drawn.style.position = 'absolute';
    //         drawn.style.height = '5px';
    //         drawn.style.width = '5px';
    //         drawn.style.top = yPos+'px';
    //         drawn.style.left = xPos+'px';
    //         drawn.style.backgroundColor = 'white';
    //         block[i].appendChild(drawn);
//         })
//     }
// }



let bl = createBoard();
colorChange(bl);