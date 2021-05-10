/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
    function backTracking (start, seq) {
        if (start === s.length) {
            return seq.length > 1;
        }
        for (let end = start; end < s.length; end++) {
            const num = +s.slice(start, end + 1);
            if (seq.length === 0 || seq[seq.length - 1] === num + 1) {
                seq.push(num);
                const rst = backTracking(end + 1, seq);
                if (rst) {
                    return true;
                }
                seq.pop();
            }
        }
        return false;
    }
    return backTracking(0, []);
};
