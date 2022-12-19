/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
    let result = Math.max(stones[1] - stones[0], stones[stones.length - 1] - stones[stones.length - 2]);
    for (let i = 2; i < stones.length; i++) {
        result = Math.max(result, stones[i] - stones[i - 2]);
    }

    return result;
};
