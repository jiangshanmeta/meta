/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let endIndex = chars.length - 1;
    while (endIndex > -1) {
        let startIndex = endIndex - 1;
        while (startIndex > -1 && chars[startIndex] === chars[endIndex]) {
            startIndex--;
        }
        const count = endIndex - startIndex;
        if (count > 1) {
            chars.splice(startIndex + 2, count - 1, ...(count + '').split(''));
        }

        endIndex = startIndex;
    }

    return chars.length;
};
