const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add('row');
    grid.appendChild(row);
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        row.appendChild(cell);

        addHoverEffect(cell);
    }
}


function addHoverEffect(item) {
    item.addEventListener("mouseenter", (e) => {
        e.target.style.background = "black";
    });
}
