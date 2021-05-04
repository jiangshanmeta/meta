/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const code = coordinates.charCodeAt(0) - 97;
    const num = +coordinates[1];
    if (code & 1) {
        return num % 2 === 1;
    } else {
        return num % 2 === 0;
    }
};
