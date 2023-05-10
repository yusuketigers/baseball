const table = document.querySelector('table')
const inputs = document.querySelectorAll('input[type="number"]')
const checkButton = document.querySelector('#check-button')

function solveSudoku(){
    const board = []

    for (let i = 0; i < 9; i++){
        board[i] = [];
        for (let j = 0; j < 9; j++){
            const input = inputs[i*9+j];
            board[i][j] = input.value !== '' ? parseInt(input.value, 10) : 0;
        }
    }

    const solved = solveSudokuHelper(board);

    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            const input = inputs[i*9+j];
            input.value = solved[i][j];
        }
    }
}

function solveSudokuHelper(board){
    const emptySpot = findEmptySpot(board);

    if (emptySpot === null){
        return board;
    }

    const [row, col] = emptySpot;

    for (let num = 1; num <= 9; num++){
        if (isValid(board, row, col, num)){
            board[row][col] = num;
            const solution = solveSudokuHelper(board);
            if (solution !== null){
                return solution;
            }
            board[row][col] = 0;
        }
    }
    return null;
}

function findEmptySpot(board){
    for (let row = 0; row < 9; row++){
        for (let col = 0; col < 9; col++){
            if (board[row][col] === 0){
                return [row, col];
            }
        }
    }
    return null;
}

function isValid(board, row, col, num){

    for (let i = 0; i < 9; i++){
        if (board[row][i] === num){
            return false;
        }
    }

    for (let i = 0; i < 9; i++){
        if (board[i][col] === num){
            return false;
        }
    }

    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[blockRow + i][blockCol + j] === num){
                return false;
            }
        }
    }
    return true;
}

function highlightSolution(){
    table.classList.add('highlight');

    setTimeout(() => {
        table.classList.remove('highlight');
    }, 2000);
}

checkButton.addEventListener('click',() => {
    solveSudoku()
    highlightSolution()
})