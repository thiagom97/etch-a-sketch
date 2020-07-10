const body = document.querySelector("body");
const title = document.querySelector("header");
body.prepend(title);

const container = document.querySelector(".container");
container.style.cssText = "width: 800px; height: 800px; border-right: 1px solid black; border-bottom: 1px solid black;";

const restart = document.createElement("button");
restart.setAttribute("onClick", "window.location.reload();")
restart.style.cssText = "border: none; margin: 5px; color: #ffffff; background-color: hsl(0, 0%, 50%); padding: 6px; border-radius: 15px; font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; width: 100px";
restart.textContent = "Restart";
body.insertBefore(restart, container);

const btndiv = document.createElement("div");
btndiv.setAttribute("class", "buttons");
btndiv.style.cssText = "white-space: pre-line;"
btndiv.textContent = "Choose color:\n"
body.insertBefore(btndiv, restart);

const black = document.createElement("button");
black.setAttribute("id", "black");
black.textContent = "Black";
black.style.cssText = "border: none; margin: 5px; color: #ffffff; background-color: #000000; padding: 6px; border-radius: 15px; font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; width: 75px";
btndiv.appendChild(black);

function pixelate() {
    const test = document.getElementsByClassName("grid");
    for (let j = 0; j < test.length; j++) {
        test[j].addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "#000000";
        })
    }
}

let applyBlack = document.querySelector("#black");
applyBlack.addEventListener("click", () => {

    const grid = document.getElementsByClassName("grid");
    for (let k = 0; k < grid.length; k++) {
        grid[k].style.backgroundColor = "hsl(0, 0%, 50%)";
        
    }

    pixelate();
});

const randomColor = document.createElement("button");
randomColor.setAttribute("id", "rc");
randomColor.textContent = "Random";
randomColor.style.cssText = "border: none; margin: 5px; color: #ffffff; background-image: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); padding: 6px; border-radius: 15px; font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; width: 75px";
btndiv.appendChild(randomColor);

function colorRandom() {
    const test = document.getElementsByClassName("grid");
    for (let j = 0; j < test.length; j++) {
        function color() {
            return Math.floor(Math.random() * 256);
        }

        let r = color();
        let g = color();
        let b = color();

        test[j].addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
}

let applyRandomColor = document.querySelector("#rc");
applyRandomColor.addEventListener("click", () => {

    const grid = document.getElementsByClassName("grid");
    for (let k = 0; k < grid.length; k++) {
        grid[k].style.backgroundColor = "hsl(0, 0%, 50%)";
    }

    colorRandom()
});


const shade = document.createElement("button");
shade.setAttribute("id", "shade");
shade.textContent = "Darken";
shade.style.cssText = "border: none; margin: 5px; color: #ffffff; background-image: linear-gradient(to right, #888888, #000000); padding: 6px; border-radius: 15px; font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; width: 75px";
btndiv.appendChild(shade);

let lightness = 50;

function shading() {
    let test = document.getElementsByClassName("grid");
    for (let j = 0; j < test.length; j++) {
        test[j].addEventListener("mouseover", function (e) {            
            e.target.style.backgroundColor = `hsl(0, 0%, ${lightness -= 5}%)`;
        })
    }
}

let applyShade = document.querySelector("#shade");
applyShade.addEventListener("click", () => {

    const grid = document.getElementsByClassName("grid");

    for (let k = 0; k < grid.length; k++) {
        grid[k].style.backgroundColor = "hsl(0, 0%, 50%)"
    }

    shading();
    

})

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
        grid[k].style.cssText = `overflow: auto;; float: left; width: ${(800/amount)}px; height: ${800/amount}px; background-color: hsl(0, 0%, 50%); border-left: 0.1px solid black; border-top: 0.1px solid black; margin: none; box-sizing: border-box;`;
    }
}
style();