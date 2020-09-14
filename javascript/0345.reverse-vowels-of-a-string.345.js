/**
 * @param {string} s
 * @return {string}
 */
// 和344非常类似
var reverseVowels = function (s) {
    const arr = s.split('');
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    const hash = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    };
    while (leftIndex < rightIndex) {
        // 从左向右找到第一个元音
        while (leftIndex < rightIndex && !hash[arr[leftIndex]]) {
            leftIndex++;
        }
        // 从右到左找到第一个元音
        while (leftIndex < rightIndex && !hash[arr[rightIndex]]) {
            rightIndex--;
        }
        // 交换
        if (leftIndex < rightIndex) {
            const tmp = arr[rightIndex];
            arr[rightIndex] = arr[leftIndex];
            arr[leftIndex] = tmp;
            leftIndex++;
            rightIndex--;
        }
    }

    return arr.join('');
};
