/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
// 前缀树
function findRoot (trie, string) {
    const list = [];
    for (let i = 0; i < string.length; i++) {
        if (!trie) {
            break;
        }
        list.push(string[i]);
        trie = trie[string[i]];
    }

    return trie === null ? list.join('') : '';
}

var replaceWords = function (dict, sentence) {
    const trie = {};
    // 因为有多个root时要按短的算 先按长度从小到大排序
    dict.sort((a, b) => a.length - b.length);
    for (let i = 0; i < dict.length; i++) {
        const string = dict[i];
        // 考虑到dict中有的单词以dict中其他单词为根
        if (findRoot(trie, string) === '') {
            let prev = trie;
            for (let j = 0; j < string.length - 1; j++) {
                prev = prev[string[j]] || (prev[string[j]] = {});
            }
            // 最后一个字母 null结尾 便于在前缀树中确定结尾
            prev[string[string.length - 1]] = null;
        }
    }

    return sentence.split(' ').map((string) => {
        const root = findRoot(trie, string);
        return root === '' ? string : root;
    }).join(' ');
};
