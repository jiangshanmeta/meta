/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => b - a);
    trainers.sort((a, b) => b - a);
    let indexP = 0;
    let indexT = 0;
    let result = 0;
    while (indexP < players.length && indexT < trainers.length) {
        if (trainers[indexT] < players[indexP]) {
            indexP++;
        } else {
            result++;
            indexP++;
            indexT++;
        }
    }
    return result;
};
