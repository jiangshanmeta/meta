/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    const sList = s.split(' ');
    const L = Math.max(...sList.map(item => item.length));
    const result = [];
    // 遍历每一行
    for (let i = 0; i < L; i++) {
        const sequence = [];
        for (let j = 0; j < sList.length; j++) {
            if (sList[j].length > i) {
                sequence.push(sList[j][i]);
            } else {
                sequence.push(' ');
            }
        }
        // 去除结尾的空格
        while (sequence[sequence.length - 1] === ' ') {
            sequence.pop();
        }
        result.push(sequence.join(''));
    }
    return result;
};
