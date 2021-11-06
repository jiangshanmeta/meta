/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    const tokens = sentence.split(' ');
    let result = 0;
    for (const token of tokens) {
        if (!token) {
            continue;
        }
        if (match(token)) {
            result++;
        }
    }
    return result;
};

function match (token) {
    let hasLineThrough = false;
    let hasWordAfterLineThrough = false;
    for (let i = 0; i < token.length; i++) {
        const code = token.charCodeAt(i);
        if (code > 47 && code < 58) {
            return false;
        }
        if (token[i] === '-') {
            if (hasLineThrough || i === 0) {
                return false;
            }
            hasLineThrough = true;
        } else if (['!', '.', ',', ].includes(token[i])) {
            if (i !== token.length - 1) {
                return false;
            }
        } else {
            if (hasLineThrough) {
                hasWordAfterLineThrough = true;
            }
        }
    }
    return !hasLineThrough || hasWordAfterLineThrough;
}
