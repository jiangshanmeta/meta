/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    const list = input.split('\n');
    let stackPathLength = 0;
    // stack 存的是前面目录对应长度(不含\)
    const stack = [];
    let maxFileLength = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === '') {
            continue;
        }
        let tabSize = 0;
        let index = 0;

        while (index < list[i].length && list[i][index] === '\t') {
            tabSize++;
            index++;
        }

        while (stack.length > tabSize) {
            stackPathLength -= stack.pop();
        }

        if (list[i].includes('.')) {
            maxFileLength = Math.max(maxFileLength, stackPathLength + list[i].length);
        } else {
            stack.push(list[i].length - tabSize);
            stackPathLength += (list[i].length - tabSize);
        }
    }

    return maxFileLength;
};
