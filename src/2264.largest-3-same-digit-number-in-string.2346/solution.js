/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let start = 0;
    let result = '';
    const N = 3;
    while (start + N - 1 < num.length) {
        let end = start + 1;
        while (end < num.length && num[end] === num[start]) {
            end++;
        }
        if (end - start >= N) {
            const sub = num[start].repeat(N);
            if (sub > result) {
                result = sub;
            }
        }
        start = end;
    }
    return result;
};
