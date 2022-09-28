/**
 * @param {string} S
 * @return {string[]}
 */
// 返回所有构成的子串
function helper (str) {
    if (str[str.length - 1] === '0') {
        return str.length > 1 && str[0] === '0' ? [] : [
            str, ];
    }

    if (str[0] === '0') {
        return [
            str.length > 1 ? `0.${str.slice(1)}` : '0', ];
    }
    const result = [
        str, ];
    for (let i = 1; i < str.length; i++) {
        result.push(`${str.slice(0, i)}.${str.slice(i)}`);
    }
    return result;
}

var ambiguousCoordinates = function (S) {
    S = S.slice(1, -1);
    const result = [];
    for (let i = 1; i < S.length; i++) {
        const A = helper(S.slice(0, i));
        if (A.length > 0) {
            const B = helper(S.slice(i));
            if (B.length) {
                for (let i = 0; i < A.length; i++) {
                    for (let j = 0; j < B.length; j++) {
                        result.push(`(${A[i]}, ${B[j]})`);
                    }
                }
            }
        }
    }
    return result;
};
