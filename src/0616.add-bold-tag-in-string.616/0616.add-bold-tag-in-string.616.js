/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function (s, dict) {
    const result = [];
    let index = 0;
    while (index < s.length) {
        const len = match(index);
        if (len === 0) {
            result.push(s[index++]);
            continue;
        }
        let end = index + len;
        const start = index++;
        while (index <= end) {
            const len = match(index);
            end = Math.max(end, index + len);
            if (index === end && len === 0) {
                break;
            }
            index++;
        }
        result.push(`<b>${s.slice(start, end)}</b>`);
    }

    function match (start) {
        let maxLength = 0;
        for (let i = 0; i < dict.length; i++) {
            if (startWith(start, dict[i])) {
                maxLength = Math.max(maxLength, dict[i].length);
            }
        }
        return maxLength;
    }

    function startWith (start, word) {
        if (start + word.length > s.length) {
            return false;
        }
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== s[start + i]) {
                return false;
            }
        }
        return true;
    }
    return result.join('');
};
