/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function (s) {
    let result = 0;
    let binary = 0;
    const map = {
        0: -1,
    };
    for (let i = 0; i < s.length; i++) {
        const mask = 1 << (+s[i]);
        binary ^= mask;
        if (map[binary] !== undefined) {
            result = Math.max(result, i - map[binary]);
        } else {
            map[binary] = i;
        }
        for (let j = 0; j < 10; j++) {
            const newBinary = binary ^ (1 << (j));
            if (map[newBinary] !== undefined) {
                result = Math.max(result, i - map[newBinary]);
            }
        }
    }
    return result;
};
