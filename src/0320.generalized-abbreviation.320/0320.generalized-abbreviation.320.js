/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function (word) {
    const result = [];
    function backTracking (index, sequence, lastIsNumber) {
        if (index === word.length) {
            result.push(sequence.join(''));
            return;
        }
        if (lastIsNumber) {
            sequence.push(word[index++]);
            backTracking(index, sequence, false);
            sequence.pop();
        } else {
            sequence.push(word[index]);
            backTracking(index + 1, sequence, false);
            sequence.pop();

            for (let i = 1; i <= word.length - index; i++) {
                sequence.push(i);
                backTracking(index + i, sequence, true);
                sequence.pop();
            }
        }
    }
    backTracking(0, [], false);

    return result;
};
