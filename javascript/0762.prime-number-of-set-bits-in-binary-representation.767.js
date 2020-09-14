/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const prime = {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 0,
    5: 1,
    6: 0,
    7: 1,
    8: 0,
    9: 0,
    10: 0,
    11: 1,
    12: 0,
    13: 1,
    14: 0,
    15: 0,
    16: 0,
    17: 1,
    18: 0,
    19: 1,
    20: 0,
};

var countPrimeSetBits = function (L, R) {
    const arr = new Array();
    let count = 0;
    for (let i = L; i < R + 1; i++) {
        let oneCount = 0;
        if (arr[(i >> 1) - L] !== undefined) {
            oneCount = arr[(i >> 1) - L] + (i & 1);
            arr[i - L] = oneCount;
        } else {
            let val = i;
            while (val > 0) {
                val &= (val - 1);
                oneCount++;
            }
            arr[i - L] = oneCount;
        }
        count += prime[oneCount];
    }

    return count;
};
