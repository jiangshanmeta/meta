/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    const [c1, c2, ] = s.split(':');
    const row1 = +c1.slice(1);
    const row2 = +c2.slice(1);
    const result = [];
    for (let i = c1.charCodeAt(0); i <= c2.charCodeAt(0); i++) {
        const r = String.fromCharCode(i);
        for (let j = row1; j <= row2; j++) {
            result.push(`${r}${j}`);
        }
    }

    return result;
};
