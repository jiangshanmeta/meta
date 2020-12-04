/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const countMap = {};
    for (let i = 0; i < words.length; i++) {
        countMap[words[i]] = (countMap[words[i]] || 0) + 1;
    }

    const groupByFrenquency = Object.keys(countMap).reduce((obj, word) => {
        const frenquency = countMap[word];
        if (!obj[frenquency]) {
            obj[frenquency] = [
                word, ];
        } else {
            obj[frenquency].push(word);
        }

        return obj;
    }, {});

    const counts = Object.keys(groupByFrenquency).sort((a, b) => +b - (-a));

    const result = [];
    for (let i = 0; i < counts.length; i++) {
        if (k === 0) {
            break;
        }
        const words = groupByFrenquency[counts[i]].sort();
        while (k > 0 && words.length > 0) {
            result.push(words.shift());
            k--;
        }
    }

    return result;
};
