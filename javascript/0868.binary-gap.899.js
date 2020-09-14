/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
    let max = 0;

    // 找到第一个1
    while (true) {
        if (N & 1) {
            N = N >> 1;
            break;
        }
        N = N >> 1;
    }

    // 计算两个相邻1的距离
    let counter = 1;
    while (N) {
        if (N & 1) {
            if (counter > max) {
                max = counter;
            }
            counter = 1;
        } else {
            counter++;
        }
        N = N >> 1;
    }

    return max;
};
