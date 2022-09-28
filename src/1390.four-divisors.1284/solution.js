/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
    return nums.reduce((sum, item) => {
        let hasAnother = false;
        let anotherVal;
        const sqrt = Math.sqrt(item);
        for (let i = 2; i <= sqrt; i++) {
            if (item % i === 0) {
                if (hasAnother) {
                    return sum;
                } else {
                    // 注意等于sqrt的特殊情况
                    if (i === sqrt) {
                        return sum;
                    }

                    hasAnother = true;
                    anotherVal = i;
                }
            }
        }
        if (hasAnother) {
            return sum + 1 + item + anotherVal + item / anotherVal;
        } else {
            return sum;
        }
    }, 0);
};
