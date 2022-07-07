/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    const map = new Map();
    for (const c of key) {
        if (c === ' ' || map.has(c)) {
            continue;
        }
        map.set(c, String.fromCharCode(map.size + 97));
    }
    map.set(' ', ' ');

    return message.split('').map(c => map.get(c)).join('');
};
