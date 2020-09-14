/**
 * @param {string[]} phrases
 * @return {string[]}
 */
// Given a list of phrases, generate a list of Before and After puzzles.

// A phrase is a string that consists of lowercase English letters and spaces only. No space appears in the start or the end of a phrase. There are no consecutive spaces in a phrase.

// Before and After puzzles are phrases that are formed by merging two phrases where the last word of the first phrase is the same as the first word of the second phrase.

// Return the Before and After puzzles that can be formed by every two phrases phrases[i] and phrases[j] where i != j. Note that the order of matching two phrases matters, we want to consider both orders.

// You should return a list of distinct strings sorted lexicographically.

var beforeAndAfterPuzzles = function (phrases) {
    const heads = {};
    const tails = {};
    // 按照头尾聚合
    for (let i = 0; i < phrases.length; i++) {
        const word = phrases[i];
        const firstSpace = word.indexOf(' ');
        const head = firstSpace === -1 ? word : word.slice(0, firstSpace);
        const lastSpace = word.lastIndexOf(' ');
        const tail = word.slice(lastSpace + 1);
        (heads[head] || (heads[head] = [])).push(i);
        (tails[tail] || (tails[tail] = [])).push(i);
    }

    const map = {};
    const result = [];
    Object.keys(tails).forEach((tail) => {
        if (!heads[tail]) {
            return;
        }
        const tailIndexList = tails[tail];
        const headIndexList = heads[tail];
        // 排列组合成新句子
        for (let i = 0; i < tailIndexList.length; i++) {
            const index1 = tailIndexList[i];
            const word1 = phrases[index1];
            for (let j = 0; j < headIndexList.length; j++) {
                const index2 = headIndexList[j];
                if (index1 === index2) {
                    continue;
                }
                const word2 = phrases[index2];
                const word = `${word1}${word2.slice(tail.length)}`;
                // 保证唯一
                if (!map[word]) {
                    map[word] = true;
                    result.push(word);
                }
            }
        }
    });
    return result.sort();
};
