/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
// You are given an array colors, in which there are three colors: 1, 2 and 3.

// You are also given some queries. Each query consists of two integers i and c, return the shortest distance between the given index i and the target color c. If there is no solution return -1.
var shortestDistanceColor = function (colors, queries) {
    // 之前各颜色最近的索引
    const beforeIndexs = {
        1: -1,
        2: -1,
        3: -1,
    };
    // 之后各颜色最近的索引
    const afterIndexs = {
        1: -1,
        2: -1,
        3: -1,
    };
    const distances = {
        1: [],
        2: [],
        3: [],
    };
    for (let i = 0; i < colors.length; i++) {
        // 当前的 更新为before
        beforeIndexs[colors[i]] = i;
        // 更新之后最近的颜色索引
        for (let j = 1; j < 4; j++) {
            if (afterIndexs[j] < i) {
                let index = i + 1;
                while (index < colors.length && colors[index] !== j) {
                    index++;
                }
                afterIndexs[j] = index;
            }
        }
        for (let j = 1; j < 4; j++) {
            distances[j].push(Math.min(beforeIndexs[j] === -1 ? Infinity : i - beforeIndexs[j], afterIndexs[j] === colors.length ? Infinity : afterIndexs[j] - i));
        }
    }

    const result = [];
    for (let i = 0; i < queries.length; i++) {
        const tmp = distances[queries[i][1]][queries[i][0]];
        result.push(tmp === Infinity ? -1 : tmp);
    }
    return result;
};
