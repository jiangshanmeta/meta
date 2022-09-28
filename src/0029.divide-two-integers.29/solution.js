/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    var symbol = 1;
    if (dividend < 0 && divisor < 0) {
        dividend = 0 - dividend;
        divisor = 0 - divisor;
    } else if (dividend < 0) {
        symbol = -1;
        dividend = 0 - dividend;
    } else if (divisor < 0) {
        symbol = -1;
        divisor = 0 - divisor;
    }

    var sum = 0;

    var preRatio = 1;
    var ratio = 1;
    var preDivisor = divisor;
    var multiDivisor = divisor;
    var rst = 0;
    while (true) {
        if ((sum + multiDivisor) > dividend) {
            if (ratio === 1) {
                break;
            }
            rst += preRatio;
            sum += preDivisor;
            preRatio = 1;
            ratio = 1;
            preDivisor = divisor;
            multiDivisor = divisor;
        } else if ((sum + multiDivisor) === dividend) {
            rst += ratio;
            break;
        } else {
            preRatio = ratio;
            ratio += ratio;
            preDivisor = multiDivisor;
            multiDivisor += multiDivisor;
        }
    }
    if (symbol > 0 && rst > 2147483647) {
        return 2147483647;
    }
    return symbol > 0 ? rst : 0 - rst;
};
