const brickField = document.getElementById("brick");
brickField.addEventListener("change", (event) => {
    let size = getSize();
    let brick = event.target.value;
    drawPyramid(brick, size);
})

const sizeField = document.getElementById("size");
sizeField.addEventListener("input", (event) => {
    let size = Number(event.target.value);
    let brick = getBrick();
    drawPyramid(brick, size);
})

function getBrick() {
    const brickField = document.getElementById("brick");
    return brickField.value;
}

function getSize() {
    const sizeField = document.getElementById("size");
    return Number(sizeField.value);
}

function drawPyramid(brick = "#", size = 5) {

    const container = document.getElementById('pyramid');
    container.innerHTML = '';
    let result = ``;
    for (let i = 2; i <= size ; i++) {
        let row = brick;
        row = row.repeat(i);
        row = row.padStart(size, `\xa0`);
        result = result + row + "<br>";
    }
    let pyramid = document.createElement("div");
    pyramid.innerHTML = result;
    container.appendChild(pyramid);

}

drawPyramid("#", 3)