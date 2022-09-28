/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
    let max = 0;
    const countBy = {};
    const set = [];
    for (let i = 0; i < deliciousness.length; i++) {
        const num = deliciousness[i];
        max = Math.max(max, num);
        if (countBy[num]) {
            countBy[num]++;
        } else {
            countBy[num] = 1;
            set.push(num);
        }
    }
    set.sort((a, b) => a - b);
    let result = 0;
    const mod = 10 ** 9 + 7;
    let base = 1;

    while (base <= 2 * max) {
        for (let i = 0; i < set.length; i++) {
            const num = set[i];
            const rest = base - num;
            if (rest < num) {
                break;
            }

            if (num === rest) {
                const count = countBy[num];
                result = (result + count * (count - 1) / 2) % mod;
            } else if (countBy[rest]) {
                result = (result + countBy[num] * countBy[rest]) % mod;
            }
        }
        base *= 2;
    }
    return result;
};
