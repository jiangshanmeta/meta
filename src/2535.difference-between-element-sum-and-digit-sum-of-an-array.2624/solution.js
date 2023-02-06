/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    const elementSum = nums.reduce((sum, item) => sum + item, 0);
    const digitSum = nums.reduce((sum, item) => {
        while (item) {
            const digit = item % 10;
            sum += digit;
            item = (item - digit) / 10;
        }

        return sum;
    }, 0);

    return Math.abs(elementSum - digitSum);
};
