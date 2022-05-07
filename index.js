// let mousePos = {x:0, y:0};

// let userInput = document.querySelector('.user-input'); -- This needed to be within addEventListener function.
let submitBtn = document.querySelector('.submit');
let newNum = submitBtn.addEventListener('click', function() {
    let userInput = document.querySelector('.user-input');
    bl = createBoard(userInput.value);
    colorChange(bl);
})

function createBoard(num) {
    boardArea = document.querySelector('.board');
    boardArea.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    boardArea.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    boardArea.style.backgroundColor = 'rgb(201, 200, 198)';
    for (let i = 1; i <=num*num; i++) {
        block = document.createElement('div');
        block.className  = 'board-block';
        block.style.backgroundColor = 'rgb(201, 200, 198)';
        boardArea.appendChild(block);
    }
    return block = document.querySelectorAll('.board-block');
}

function draw(block) {}

function colorChange(block) {
    for (let i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = 'rgb(201, 200, 198)';
        block[i].addEventListener('mousemove', function() {
            block[i].style.backgroundColor = 'rgb(35, 35, 35)';
        })
    }   
}

// Different functionality below, with xPos and yPos capture of mouse, but it was funky.

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


// let userQuantity = parseInt((Math.floor(Math.random()*50) * 2)); --- This was put in to make sure code worked before, just generated random even number between 1-100.


// Original declaration of functions below to run the program.

// let bl = createBoard(newNum);
// colorChange(bl);