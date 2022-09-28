/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    return helper(s)[1];
};

function helper (s) {
    if (s.length === 0) {
        return [0, '', ];
    }
    const lowerIndexs = new Array(26).fill(-1);
    const upperIndexs = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code < 97) {
            upperIndexs[code - 65] = i;
        } else {
            lowerIndexs[code - 97] = i;
        }
    }
    for (let i = 0; i < 26; i++) {
        const lowerIndex = lowerIndexs[i];
        const upperIndex = upperIndexs[i];
        if (lowerIndex === -1 && upperIndex !== -1) {
            const [leftLength, leftStr, ] = helper(s.slice(0, upperIndex));
            const [rightLength, rightStr, ] = helper(s.slice(upperIndex + 1));
            if (rightLength > leftLength) {
                return [rightLength, rightStr, ];
            } else {
                return [leftLength, leftStr, ];
            }
        } else if (lowerIndex !== -1 && upperIndex === -1) {
            const [leftLength, leftStr, ] = helper(s.slice(0, lowerIndex));
            const [rightLength, rightStr, ] = helper(s.slice(lowerIndex + 1));
            if (rightLength > leftLength) {
                return [rightLength, rightStr, ];
            } else {
                return [leftLength, leftStr, ];
            }
        }
    }

    return [s.length, s, ];
}
