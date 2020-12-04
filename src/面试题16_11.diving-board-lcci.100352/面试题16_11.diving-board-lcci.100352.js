/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    if (k === 0) {
        return [];
    }

    if (shorter === longer) {
        return [
            shorter * k, ];
    }
    const result = [];
    for (let i = 0; i <= k; i++) {
        result.push(shorter * (k - i) + longer * i);
    }
    return result;
};
