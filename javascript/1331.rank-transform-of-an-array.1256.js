/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    // 去重 排序
    const uniqueArr = [
        ...new Set(arr), ].sort((a, b) => a - b);
    // hash化
    const elementRankMap = {};
    for (let i = 0; i < uniqueArr.length; i++) {
        elementRankMap[uniqueArr[i]] = i + 1;
    }

    return arr.map(node => elementRankMap[node]);
};
