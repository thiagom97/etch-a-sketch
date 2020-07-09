const body = document.querySelector("body");
const title = document.querySelector("header");
body.prepend(title);

const container = document.querySelector(".container");
container.style.cssText = "width: 800px; height: 800px; border-right: 1px solid black; border-bottom: 1px solid black;";

const restart = document.createElement("button");
restart.setAttribute("onClick", "window.location.reload();")
restart.style.cssText = "border: none; margin: 5px; color: #ffffff; background-color: #1c2e4a; padding: 6px; border-radius: 15px; font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;";
restart.textContent = "Restart";
body.insertBefore(restart, container);

const btndiv = document.createElement("div");
btndiv.setAttribute("class", "buttons");
body.appendChild(btndiv);

const randomColor = document.createElement("button");
randomColor.setAttribute("onClick", "");
randomColor.textContent = "Random Color";
randomColor.style.cssText = "";
btndiv.appendChild(randomColor);

const shade = document.createElement("button");
shade.setAttribute("onClick", "");
shade.textContent = "Shade";
shade.style.cssText = "";
btndiv.appendChild(shade);

let amount = prompt("How many rows would you like?", "16");

function createGrid(amount) {
    for (let i = 0; i < amount * amount; i++) {
        const divs = document.createElement("div");
        container.appendChild(divs);
        divs.setAttribute("class", "grid");
    }
}
createGrid(amount);

function style() {
    const grid = document.getElementsByClassName("grid");
    for (let k = 0; k < grid.length; k++) {
        grid[k].style.cssText = `overflow: auto;; float: left; width: ${(800/amount)}px; height: ${800/amount}px; background-color: #888888; border-left: 0.1px solid black; border-top: 0.1px solid black; margin: none; box-sizing: border-box;`;
    }
}
style();
let random = Math.floor(Math.random() * 257);

function pixelate() {
    const test = document.getElementsByClassName("grid");
    for (let j = 0; j < test.length; j++) {
        test[j].addEventListener("mouseover", function (e) {
            e.target.style.cssText = `overflow: auto;; float: left; width: ${800/amount}px; height: ${800/amount}px; background-color: black; border-left: 0.1px solid black; border-top: 0.1px solid black; margin: none; box-sizing: border-box; ;`;
        })
    }
}
pixelate();