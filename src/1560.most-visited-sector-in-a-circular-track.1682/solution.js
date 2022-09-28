/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    const counts = new Array(n + 1).fill(0);
    counts[rounds[0]]++;
    for (let i = 0; i < rounds.length - 1; i++) {
        const from = rounds[i];
        const to = rounds[i + 1];
        if (from < to) {
            for (let j = from + 1; j <= to; j++) {
                counts[j]++;
            }
        } else {
            for (let j = from + 1; j <= n; j++) {
                counts[j]++;
            }
            for (let j = 1; j <= to; j++) {
                counts[j]++;
            }
        }
    }
    let result = [];
    let maxCount = 0;
    for (let i = 1; i < n + 1; i++) {
        if (counts[i] > maxCount) {
            result = [
                i, ];
            maxCount = counts[i];
        } else if (counts[i] === maxCount) {
            result.push(i);
        }
    }
    return result;
};
