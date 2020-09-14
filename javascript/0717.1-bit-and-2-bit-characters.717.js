/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    // 最后一位必须是0
    if (bits[bits.length - 1] !== 0) {
        return false;
    }
    let index = 0;
    while (index < bits.length) {
        // 最后一位 而且已验证是0
        if (index === bits.length - 1) {
            return true;
        }

        if (bits[index] === 1) {
            // 2bit
            index += 2;
        } else {
            // 1bit
            index++;
        }
    }
    return false;
};
