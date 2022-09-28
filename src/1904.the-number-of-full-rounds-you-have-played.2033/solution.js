/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function (startTime, finishTime) {
    const startTS = startTime.slice(0, 2) * 60 + (+startTime.slice(3));
    let finishTS = finishTime.slice(0, 2) * 60 + (+finishTime.slice(3));
    if (finishTS < startTS) {
        finishTS += 24 * 60;
    }
    const startRound = Math.ceil(startTS / 15);
    const endRound = Math.floor(finishTS / 15);
    return endRound - startRound;
};
