/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

const cache = {
    0: 1,
    1: 1,
};

function getFactorial (n) {
    if (!cache[n]) {
        cache[n] = getFactorial(n - 1) * n;
    }
    return cache[n];
}

var getPermutation = function (n, k) {
    const arr = Array.apply(null, {
        length: n,
    }).map((item, index) => index + 1);

    k--;
    n--;

    let rst = '';

    while (k > 0) {
        const factorial = getFactorial(n);
        const index = Math.floor(k / factorial);
        k -= factorial * index;
        rst += arr[index];
        arr.splice(index, 1);
        n--;
    }

    return rst + arr.join('');
};
