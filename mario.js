const brickField = document.getElementById("brick");
const sizeField = document.getElementById("size");

brickField.addEventListener("change", (event) => {
    let size = Number(sizeField.value);
    let brick = event.target.value;
    drawPyramid(brick, size);
})

sizeField.addEventListener("input", (event) => {
    let size = Number(event.target.value);
    let brick = brickField.value;
    drawPyramid(brick, size);
})

function drawPyramid(brick = "#", size = 11) {
    const container = document.getElementById('pyramid');
    container.innerHTML = '';
    let result = ``;
    for (let i = 2; i <= size + 1; i++) {
        let row = brick;
        row = row.repeat(i);
        row = row.padStart(size + 1, `\xa0`);
        result = result + row + "<br>";
    }
    let pyramid = document.createElement("div");
    pyramid.innerHTML = result;
    container.appendChild(pyramid);
}

drawPyramid();