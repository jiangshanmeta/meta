/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    if (s.length < 3) {
        return s.length;
    }
    let a = s[0];
    let aIndexs = [0, ];
    let b = '';
    let bIndexs = [];
    let index = 1;
    let result = 1;
    while (index < s.length) {
        result = index + 1;
        if (s[index] === a) {
            aIndexs.push(index++);
            continue;
        }
        b = s[index];
        bIndexs.push(index++);
        break;
    }
    while (index < s.length) {
        if (s[index] === a) {
            result = Math.max(result, index - Math.min(aIndexs[0], bIndexs[0]) + 1);
            aIndexs.push(index++);
        } else if (s[index] === b) {
            result = Math.max(result, index - Math.min(aIndexs[0], bIndexs[0]) + 1);
            bIndexs.push(index++);
        } else {
            if (aIndexs[aIndexs.length - 1] < bIndexs[bIndexs.length - 1]) {
                // 干掉a
                while (bIndexs.length && bIndexs[0] < aIndexs[aIndexs.length - 1]) {
                    bIndexs.shift();
                }
                a = s[index];
                aIndexs = [index++, ];

                if (bIndexs.length === 0) {
                    while (index < s.length) {
                        result = Math.max(result, index - aIndexs[0] + 1);
                        if (s[index] === a) {
                            aIndexs.push(index++);
                            continue;
                        }
                        b = s[index];
                        bIndexs = [index++, ];
                        break;
                    }
                }
            } else {
                while (aIndexs.length && aIndexs[0] < bIndexs[bIndexs.length - 1]) {
                    aIndexs.shift();
                }
                b = s[index];
                bIndexs = [index++, ];

                if (aIndexs.length === 0) {
                    while (index < s.length) {
                        result = Math.max(result, index - bIndexs[0] + 1);
                        if (s[index] === b) {
                            bIndexs.push(index++);
                            continue;
                        }
                        a = s[index];
                        aIndexs = [index++, ];
                        break;
                    }
                }
            }
        }
    }
    return result;
};
