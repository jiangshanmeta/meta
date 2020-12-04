/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    const result = [];
    let startIndex = 0;
    while (startIndex < S.length) {
        const val = S[startIndex];
        let endIndex = startIndex + 1;
        while (endIndex < S.length && S[endIndex] === val) {
            endIndex++;
        }
        const count = endIndex - startIndex;
        if (count > 2) {
            result.push([
                startIndex, endIndex - 1, ]);
        }
        startIndex = endIndex;
    }
    return result;
};
