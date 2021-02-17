const $brickField = $('#brick');
const $sizeField = $('#size');

$brickField.change((event) => {
    let size = getValue($sizeField );
    let brick = event.target.value;
    drawPyramid(brick, size);
})

$sizeField.on('input', (event) => {
    let size = Number(event.target.value);
    let brick = getValue($brickField);
    drawPyramid(brick, size);
})

function getValue(element) {
    return element.value;
}

function drawPyramid(brick = "#", size = 11) {
    const container = $('#pyramid');
    container.html('');
    let result = ``;
    for (let i = 2; i <= size + 1; i++) {
        let row = brick;
        row = row.repeat(i);
        row = row.padStart(size + 1, `\xa0`);
        result = result + row + "<br>";
    }
    let pyramid = $('<div>');
    pyramid.html(result);
    container.append(pyramid);
}

drawPyramid();