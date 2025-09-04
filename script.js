let img = document.querySelector(".image img");

let idx = 1;

let myInterval;

function handleLooping() {

    myInterval = setInterval(() => {

        img.style.opacity = 0;

        setTimeout(() => {
            img.src = `./p${idx}.png`;
        }, 500)

        setTimeout(() => {
            img.style.opacity = 1;
        }, 600)
        idx = (idx === 5 ? 1 : ++idx);
    }, 1500);
}

handleLooping();
let looping = true;

function handleContinueClick() {
    if (!looping) {
        looping = true;
        handleLooping();
    }
}

function handleStopClick() {
    clearInterval(myInterval);
    looping = false;
}
