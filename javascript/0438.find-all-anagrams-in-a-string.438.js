/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    // 对p按照字母进行countBy
    const countBy = {};
    for (let i = 0; i < p.length; i++) {
        countBy[p[i]] = (countBy[p[i]] || 0) + 1;
    }
    const letters = Object.keys(countBy);
    const result = [];
    // 统计子串letter次数用的 而且是一直再用 不是每个子串统计一遍哦
    let localCountBy = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // 遇到没见过的letter 前面统计的都可以扔掉了
        if (countBy[s[i]] === undefined) {
            count = 0;
            localCountBy = {};
            continue;
        }
        // 更新当前统计数据
        localCountBy[s[i]] = (localCountBy[s[i]] || 0) + 1;
        count++;
        // letter总数量对了
        if (count === p.length) {
            // 每一个letter数量都要求一致
            letters.every((letter) => {
                return countBy[letter] === localCountBy[letter];
            }) && result.push(i - count + 1);
            // 把这个子串第一个letter对应数据删掉
            localCountBy[s[i - count + 1]]--;
            count--;
        }
    }
    return result;
};
