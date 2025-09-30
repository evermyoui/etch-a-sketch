const big = document.querySelector(".big");
const container = document.querySelector(".container");
const gridButton = document.createElement("button");

big.insertBefore(gridButton, big.children[1]);
gridButton.textContent = "Change grid size";

gridButton.addEventListener('click', ()=>{
    const size = parseInt(prompt("Enter Size (1-64): "));
    if (isNaN(size) || size < 1 || size> 64){
        alert("Please Enter valid size");
        return;
    }
    changeSize(size);
});

changeSize(16);

function changeSize(size){
    container.innerHTML = "";
    const squareSize = 700/size;

    for (let i =0; i< size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;


        square.addEventListener('mouseenter', () =>{
            
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(square);
    }
}