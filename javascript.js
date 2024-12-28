let gridSize = 16;

const grid = document.querySelector(".grid");

const gridSizeBtn = document.querySelector(".grid-button");

createGrid(gridSize);

gridSizeBtn.addEventListener("click", (e) => {
    let size = prompt("Enter your prefered grid size:", "Max 100");

    if (size <= 100){
        gridSize = size;
    } else {
        alert("Invalid Input");
    }
    removePrevGrid();
    createGrid(gridSize);
});

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        grid.appendChild(row);
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add('cell');
            row.appendChild(cell);
    
            addHoverEffect(cell);
        }
    }
}

function addHoverEffect (item) {
    item.addEventListener("mouseenter", (e) => {
        e.target.style.background = "black";
    });
}

function removePrevGrid () {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}
