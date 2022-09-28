/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
    const result = [];
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            result.push(`${currentState.slice(0, i)}--${currentState.slice(i + 2)}`);
        }
    }
    return result;
};
