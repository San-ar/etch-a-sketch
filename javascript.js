const grid = document.querySelector(".grid");

grid.addEventListener("mouseenter", (e) => {
    e.target.style.background = "black";
});

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add('row');
    grid.appendChild(row);
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

// const cell = document.querySelectorAll(".cell");

// cell.addEventListener("mouseenter", (e) => {
//     e.target.style.background  = "black";
// });

// function addHoverEffect (item) {
//     item.addEventListener("mouseenter", (e) => {
//         e.target.style.background = "black";
//     });
// }

const cell =  document.querySelectorAll(".cell");

document.addEventListener("DOMContentLoaded", () => {
   

   cell.addEventListener("mouseenter", (e) => {
        e.target.style.background = "black";
   });
});