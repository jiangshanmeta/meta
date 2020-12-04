/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
    const marked = new Array(transactions.length).fill(false);
    const result = [];
    // 按照name聚合 存的是处理好的数组
    const groupByName = {};
    // 按照name聚合 存的是对应索引
    const groupByNameIndex = {};
    for (let i = 0; i < transactions.length; i++) {
        const info = transactions[i].split(',');
        // 条件1
        if (+info[2] > 1000) {
            result.push(transactions[i]);
            marked[i] = true;
        }
        (groupByName[info[0]] || (groupByName[info[0]] = [])).push(info);
        (groupByNameIndex[info[0]] || (groupByNameIndex[info[0]] = [])).push(i);
        for (let j = 0; j < groupByName[info[0]].length - 1; j++) {
            const otherInfo = groupByName[info[0]][j];
            const otherIndex = groupByNameIndex[info[0]][j];
            // 条件2
            if (info[3] !== otherInfo[3] && Math.abs(info[1] - otherInfo[1]) < 61) {
                if (!marked[otherIndex]) {
                    marked[otherIndex] = true;
                    result.push(otherInfo.join(','));
                }

                if (!marked[i]) {
                    result.push(transactions[i]);
                    marked[i] = true;
                }
            }
        }
    }
    return result;
};
