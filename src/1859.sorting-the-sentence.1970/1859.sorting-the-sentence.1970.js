/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    const list = s.split(' ');
    const map = {};
    for (let i = 0; i < list.length; i++) {
        const index = list[i].substr(-1);
        const word = list[i].substr(0, list[i].length - 1);
        map[index] = word;
    }
    const result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(map[i + 1]);
    }
    return result.join(' ');
};
