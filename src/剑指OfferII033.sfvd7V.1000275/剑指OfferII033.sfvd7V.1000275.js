/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {};
    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (map[key]) {
            map[key].push(word);
        } else {
            map[key] = [word, ];
        }
    }
    return Object.values(map);
};
