const body = document.querySelector("body");
const restart = document.createElement("button");
restart.setAttribute("onClick", "window.location.reload();")
restart.textContent = "Restart";
body.prepend(restart);
const container = document.querySelector(".container");
container.style.cssText = "background-color: #888888; width: 800px; height: 800px; border-right: 1px solid black; border-bottom: 1px solid black;";



let amount = prompt("How many rows would you like?", "16");

function createGrid(amount) {
    for (let i = 0; i < amount * amount; i++) {
        const divs = document.createElement("div");
        container.appendChild(divs);
        divs.setAttribute("class", "grid");
        divs.textContent = ".";
        //divs.textContent = `${Math.ceil((i+1)/16)}` + "x" + `${i+1}`;

    }
}
createGrid(amount);

function style(){
    const grid = document.getElementsByClassName("grid");
    for (let k=0; k<grid.length; k++){
        grid[k].style.cssText = `display: inline-block; width: ${800/amount}px; height: ${800/amount}px; background-color: #888888; border-left: 0.1px solid black; border-top: 0.1px solid black; margin: none; box-sizing: border-box; color: #888888;`;
    }
}
style();

function pixelate() {
    const test = document.getElementsByClassName("grid");
    for (let j = 0; j < test.length; j++) {
        test[j].addEventListener("mouseover", function (e) {
            e.target.style.cssText = `display: inline-block; width: ${800/amount}px; height: ${800/amount}px; background-color: #000000; border-left: 0.1px solid black; border-top: 0.1px solid black; margin: none; box-sizing: border-box; color: #000000;`;
        })
    }
}
pixelate();
