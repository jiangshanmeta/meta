/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    let A = 0;
    let B = 0;
    let index = 0;
    while (index < colors.length) {
        const start = index;
        const color = colors[index++];
        while (index < colors.length && colors[index] === color) {
            index++;
        }
        const count = index - start;
        if (count > 2) {
            if (color === 'A') {
                A += count - 2;
            } else {
                B += count - 2;
            }
        }
    }
    return A > B;
};
