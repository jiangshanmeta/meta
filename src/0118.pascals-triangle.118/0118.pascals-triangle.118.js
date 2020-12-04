/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return [];
    }

    const dp = [
        [
            1, ],
    ];
    for (let i = 1; i < numRows; i++) {
        const newRow = [
            1, ];
        const lastRow = dp[dp.length - 1];
        for (let j = 0; j < i - 1; j++) {
            newRow.push(lastRow[j] + lastRow[j + 1]);
        }
        newRow.push(1);
        dp.push(newRow);
    }

    return dp;
};
