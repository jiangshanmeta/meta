/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let rightMax = heights[heights.length - 1];
    const result = [heights.length - 1, ];
    for (let i = heights.length - 2; i > -1; i--) {
        if (heights[i] > rightMax) {
            result.push(i);
            rightMax = heights[i];
        }
    }
    return result.reverse();
};
