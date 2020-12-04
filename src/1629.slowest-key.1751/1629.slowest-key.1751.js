/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let result = '';
    let maxDiff = 0;
    let prev = 0;
    for (let i = 0; i < releaseTimes.length; i++) {
        const diff = releaseTimes[i] - prev;
        if (diff > maxDiff) {
            maxDiff = diff;
            result = keysPressed[i];
        } else if (diff === maxDiff && keysPressed[i] > result) {
            result = keysPressed[i];
        }
        prev = releaseTimes[i];
    }
    return result;
};
