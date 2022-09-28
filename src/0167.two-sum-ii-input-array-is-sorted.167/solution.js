/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // 双指针
    // left指针初始化为0 right初始化指向最后一个元素
    // 两元素相加，若大于target 则 right-- 若小于target left++
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [
                left + 1, right + 1, ];
        }
    }
};
