/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var symbol = 1;
    if (x < 0) {
        symbol = -1;
    }
    x = symbol * x;
    var queue = [];
    var yushu;
    while (x) {
        yushu = x % 10;
        queue.push(yushu);
        x = (x - yushu) / 10;
    }
    var sum = 0;
    while (queue.length) {
        sum = sum * 10 + queue.shift();
    }

    if (sum > Math.pow(2, 31)) {
        return 0;
    }
    return symbol * sum;
};
