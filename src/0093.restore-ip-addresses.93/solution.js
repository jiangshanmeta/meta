/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    function backTracking (list, sequence, start) {
        if (list.length === 4) {
            if (start === s.length) {
                return sequence.push(list.join('.'));
            }
            return;
        }

        for (let i = 0; i < 3; i++) {
            if (!s[start + i]) {
                return;
            }
            if (i > 0 && s[start] === '0') {
                return;
            }

            const str = s.slice(start, start + i + 1);
            if (i === 2 && Number(str) > 255) {
                break;
            }
            list.push(str);
            backTracking(list, sequence, start + i + 1);
            list.pop();
        }
    }

    const sequence = [];
    backTracking([], sequence, 0);
    return sequence;
};
