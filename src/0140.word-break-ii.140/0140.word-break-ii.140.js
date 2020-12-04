/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    wordDict.sort((a, b) => a.length - b.length);
    // dp[i] 存的是如果能到大这个长度 最后一个单词
    // 默认为undefined 即不能到达该长度
    const dp = new Array(s.length + 1);
    dp[0] = [];
    for (let i = 0; i < dp.length; i++) {
        if (!dp[i]) {
            continue;
        }
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            if (i + word.length > s.length) {
                break;
            }
            let flag = true;
            for (let k = 0; k < word.length; k++) {
                if (word[k] !== s[i + k]) {
                    flag = false;
                    break;
                }
            }

            flag && (dp[i + word.length] || (dp[i + word.length] = [])).push(word);
        }
    }

    if (!dp[s.length]) {
        return [];
    }
    // 从后到前把字符串信息收集起来
    return map2Str(dp, s.length);
};

function map2Str (dp, index) {
    const result = [];
    for (let i = 0; i < dp[index].length; i++) {
        const word = dp[index][i];
        // 该单词就是第一个单词
        if (word.length === index) {
            result.push(word);
        } else {
            // 前面还有其他单词
            const prefixs = map2Str(dp, index - word.length);
            for (let j = 0; j < prefixs.length; j++) {
                result.push(`${prefixs[j]} ${word}`);
            }
        }
    }

    return result;
}
