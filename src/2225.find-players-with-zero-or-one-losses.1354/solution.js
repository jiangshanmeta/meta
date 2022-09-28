/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const winMap = new Map();
    const loseMap = new Map();
    for (const [winner, loser, ] of matches) {
        if (winMap.has(winner)) {
            winMap.set(winner, winMap.get(winner) + 1);
        } else {
            winMap.set(winner, 1);
        }
        if (loseMap.has(loser)) {
            loseMap.set(loser, loseMap.get(loser) + 1);
        } else {
            loseMap.set(loser, 1);
        }
    }
    const answer = [
        [],
        [],
    ];
    for (const id of winMap.keys()) {
        if (!loseMap.has(id)) {
            answer[0].push(id);
        }
    }
    for (const [id, count, ] of loseMap) {
        if (count === 1) {
            answer[1].push(id);
        }
    }
    answer[0].sort((a, b) => a - b);
    answer[1].sort((a, b) => a - b);
    return answer;
};
