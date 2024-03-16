const frog = document.querySelector(".frog");
const log = document.querySelector(".log");

const Jump = () => {
    frog.classList.add("jump"); 
    
    setTimeout(() => {
        frog.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const logPosition = log.offsetLeft;
    const frogPosition = +window.getComputedStyle(frog).bottom.replace("px", "");

    if(logPosition <= 80 && logPosition > 0 && frogPosition < 50) {
        log.style.animation = "none";
        log.style.left = `${logPosition}px`;
        
        frog.style.animation = "none";
        frog.style.left = `${frogPosition}px`;
        
        frog.src = "./images/endfrog.png";
        frog.style.width = "150px";

        clearInterval(loop);

        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Play Again";
        reloadButton.style.backgroundColor = "rgb(5, 60, 5)"
        reloadButton.style.color = "white"
        reloadButton.addEventListener("click", () => {
            location.reload();
            
        });
        document.body.appendChild(reloadButton);
    }
}, 10);

document.addEventListener("keydown", Jump);

