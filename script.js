const container = document.querySelector('.container');

makeGrid();
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('colored'); 
    })
})



function createSquare() {
    const div = document.createElement('div');
    div.classList.add('square');
    return div;
}

function makeGrid() {
    for (let i=0; i< 16 * 16; i++) {
        container.appendChild(createSquare())
    }    
}