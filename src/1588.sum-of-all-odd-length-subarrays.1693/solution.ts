// 前缀和数组 时间复杂度O(n^2) 空间复杂度O(n)
function sumOddLengthSubarrays (arr: number[]): number {
    const sums:number[] = new Array(arr.length + 1);
    sums[0] = 0;
    for (let i = 0; i < arr.length; i++) {
        sums[i + 1] = sums[i] + arr[i];
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
            result += sums[j + 1] - sums[i];
        }
    }
    return result;
}
// 参考 https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/solution/cong-on3-dao-on-de-jie-fa-by-liuyubobobo/
// 对于数组元素i，要使得它在奇数长的字数组中，需要 左边偶数个元素且右边偶数个元素 或者 左边奇数个元素且右边奇数个元素
// 考虑左边有left个元素，那么其可构成的偶数个元素的数组的个数为 (left>>1)+1
// 右边有right个元素，其可构成偶数个元素的数组的个数为 (right>>1)+1
// 两者互相独立 正交 因此相乘
// 奇数的同理
function sumOddLengthSubarrays2 (arr: number[]): number {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const left = i;
        const right = arr.length - i - 1;
        result += arr[i] * (((left >> 1) + 1) * ((right >> 1) + 1) + ((left + 1) >> 1) * ((right + 1) >> 1));
    }
    return result;
}
