/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // dp[i] 表示长度i能否到达
    const dp = new Array(s.length).fill(false);
    // 初始只有长度为0能到达
    dp[0] = true;
    // stack中存的是能到达的长度，由此衍生出下一个可到达长度
    // stack也好 queue也好 这里都行
    const stack = [
        0, ];

    while (stack.length) {
        const length = stack.pop();

        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            const wordLength = word.length;
            if (length + wordLength > s.length || dp[length + wordLength]) {
                continue;
            }
            // 校验能否由长度length和word衍生出下一个长度
            let flag = true;
            for (let k = 0; k < wordLength; k++) {
                if (word[k] !== s[length + k]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                if (length + wordLength === s.length) {
                    return true;
                }
                dp[length + wordLength] = true;
                stack.push(length + wordLength);
            }
        }
    }
    return false;
};
