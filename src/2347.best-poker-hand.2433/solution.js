/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    if (suits.every(item => item === suits[0])) {
        return 'Flush';
    }
    let mayPair = false;
    const map = new Map();
    for (const rank of ranks) {
        if (map.has(rank)) {
            const num = map.get(rank) + 1;
            if (num === 3) {
                return 'Three of a Kind';
            }
            if (num === 2) {
                mayPair = true;
            }
            map.set(rank, num);
        } else {
            map.set(rank, 1);
        }
    }
    return mayPair ? 'Pair' : 'High Card';
};
