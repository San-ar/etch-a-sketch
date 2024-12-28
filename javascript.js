let gridSize = 16;
let sketchColor = "rgb(0,0,0)";
let colorStatus = "black";

const grid = document.querySelector(".grid");

const gridSizeBtn = document.querySelector(".grid-button");

const colorToggle = document.querySelector(".color-button");

createGrid(gridSize);

colorChange();


gridSizeBtn.addEventListener("click", (e) => {
    let size = prompt("Enter your prefered grid size:", "Max 100");

    if (size <= 100) {
        gridSize = size;
    } else {
        alert("Invalid Input");
    }
    removePrevGrid();
    createGrid(gridSize);
});

function colorChange() {
    colorToggle.addEventListener('click', (e) => {

        assignColor();
    });
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        grid.appendChild(row);
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add('cell');
            cell.style.opacity = 0;
            row.appendChild(cell);

            if (colorStatus == "red"){
                sketchColor = randomRGB();
                console.log(sketchColor);
            } else if (colorStatus == "black"){
                sketchColor = "rgb(0,0,0)";
            }
            
            addHoverEffect(cell, sketchColor);
        }
    }
}

function addHoverEffect(item, sketchColor) {
    item.addEventListener("mouseenter", (e) => {
        const target = e.target;
        const currentOpacity = parseFloat(target.style.opacity) || 0;
        const newOpacity = Math.min(currentOpacity + 0.1, 1); // Increment opacity by 0.1, max 1
        target.style.opacity = newOpacity;
        target.style.background = sketchColor;
        console.log(`Updated opacity: ${newOpacity}`);
    });
}

function assignColor() {
    if (sketchColor == "rgb(0,0,0)") {
        // sketchColor = "red";
        colorStatus = "red";
        removePrevGrid();
        createGrid(gridSize);
    } else {
        // sketchColor = "black";
        colorStatus = "black";
        removePrevGrid();
        createGrid(gridSize);
    }
}

function removePrevGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

function randColorNum() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
}