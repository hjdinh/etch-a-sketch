function createGrid(size) {
    let container = document.querySelector("#container");
    let len = 960/size;
    for (let row = 0; row < size; row++) {
        let divRow = document.createElement("div")
        for (let column = 0; column < size; column++) {
            let div = document.createElement("div");
            div.classList.add("grid");
            div.style.width = len + "px";
            div.style.height = len + "px";
            divRow.appendChild(div);
        };
        container.appendChild(divRow);
    };

    let grid = document.querySelectorAll(".grid");
    grid.forEach((square) => {
        square.addEventListener("mouseover", () => 
            (square.style.background = "black")
        );
    });
};

createGrid(16);

function newGrid() {
    let size = prompt("Size of new grid?");
    let container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(size);
};

let button = document.querySelector(".newGrid")
button.addEventListener("click", (size) => {
    newGrid(size);
});