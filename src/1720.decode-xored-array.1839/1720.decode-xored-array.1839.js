/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    const result = new Array(encoded.length + 1);
    result[0] = first;
    for (let i = 0; i < encoded.length; i++) {
        result[i + 1] = result[i] ^ encoded[i];
    }
    return result;
};
