/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let result = -1;
    const map = new Map();
    for (const num of nums) {
        const key = calcSumOfDigits(num);
        if (map.has(key)) {
            const list = map.get(key);
            if (list.length === 1) {
                if (list[0] >= num) {
                    list.push(num);
                } else {
                    list.unshift(num);
                }
            } else {
                if (num >= list[0]) {
                    list[1] = list[0];
                    list[0] = num;
                } else if (num > list[1]) {
                    list[1] = num;
                }
            }
            result = Math.max(result, list[0] + list[1]);
        } else {
            map.set(key, [num, ]);
        }
    }
    return result;
};

function calcSumOfDigits (num) {
    let result = 0;
    while (num) {
        const digit = num % 10;
        result += digit;
        num = (num - digit) / 10;
    }
    return result;
}
