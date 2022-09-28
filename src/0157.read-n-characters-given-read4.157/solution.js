/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        let count = 0;
        while (count < n) {
            const tmpBuf = [];
            const r = read4(tmpBuf);
            let index = 0;
            while (index < tmpBuf.length && count < n) {
                buf[count++] = tmpBuf[index++];
            }
            if (r !== 4) {
                break;
            }
        }
        return count;
    };
};
