function createGrid(size) {
    let px = (960 / size) + "px";
    console.log("px: " + px);

    const gridContainer = document.querySelector("#grid-container");

    // creates cols
    for (let i = 0; i < size; i++) {
        const colDiv = document.createElement("div");
        gridContainer.appendChild(colDiv).className = "grid col";
    }

    const cols = document.querySelectorAll(".col");
    // creates rows
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const rowDiv = document.createElement("div");
            cols[i].appendChild(rowDiv).className = "grid row";   
        }
    }

    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.style.height = px;
        row.style.width = px;
    });

    cols.forEach((col) => {
        col.style.height = px;
        col.style.width = px;
    });
    const grid = document.querySelectorAll(".grid");

    grid.forEach((square) => {
        square.addEventListener("mouseover", (event) => {   
        // highlight the mouseenter target
        square.classList.add("hovered");
        })
    });
}


createGrid(16);

const button = document.querySelector("#reset");
const grid = document.querySelectorAll(".grid");
const gridContainer = document.querySelector("#grid-container");
let userSize = 0;

button.addEventListener("click", (event) => {
    userSize = 0;
    const grid = document.querySelectorAll(".grid");
    grid.forEach((square) => {
        // highlight the mouseenter target
        square.classList.remove("hovered");
        
    });

    while (userSize < 1 || userSize > 960) {
        userSize = prompt("How many squares per side on the new grid?");
    }
    createGrid(userSize);
        
});

