/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    const map = {};
    for (let i = 0; i < knowledge.length; i++) {
        map[knowledge[i][0]] = knowledge[i][1];
    }

    const result = [];
    let index = 0;
    while (index < s.length) {
        if (s[index] !== '(') {
            result.push(s[index++]);
            continue;
        }
        const start = ++index;
        while (index < s.length && s[index] !== ')') {
            index++;
        }
        const word = s.slice(start, index);

        if (map[word] !== undefined) {
            result.push(map[word]);
        } else {
            result.push('?');
        }
        index++;
    }
    return result.join('');
};
