const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.new-grid-btn');

makeGrid(16);

newGridBtn.addEventListener('click', () => {
    let newNumber;
    do {
        newNumber = Number(prompt("Enter a new number for the Grid\n (Your choice < 100)", "16"));
    } while (newNumber > 100);
    removeGrid();   
    makeGrid(newNumber);
})


function createSquare(nmbSquares) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `calc(100% / ${nmbSquares})`;
    div.style.height = `calc(100% / ${nmbSquares})`;
    return div;
}

function makeGrid(nmbSquares) {
    for (let i=0; i< nmbSquares * nmbSquares; i++) {
        container.appendChild(createSquare(nmbSquares))
    }  
    
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('colored'); 
        })
    })
}

function removeGrid () {
    container.textContent = '';
}