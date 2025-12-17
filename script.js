const GRID_SIZE = 960;
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

const container = document.querySelector('.container');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const input = prompt('Size ? (Max 100)');
    const size = Number(input);
    if (!isNaN(size) && size > 0 && size <= MAX_SIZE) {
        createGrid(size);
    }
});

function createGrid(size = DEFAULT_SIZE) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    const width = GRID_SIZE / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${width}px`;
        square.style.height = `${width}px`;
        square.addEventListener('mouseover', () => square.classList.add('square'));
        container.appendChild(square);
    }
}

createGrid();