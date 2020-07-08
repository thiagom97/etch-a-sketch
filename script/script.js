const container = document.querySelector(".container");

function createGrid(amount) {
    for (let i = 0; i < amount * amount; i++) {
        const divs = document.createElement("div");
        container.appendChild(divs);
        divs.setAttribute("id", "grid");
        divs.textContent="."
    }
}
createGrid(16);