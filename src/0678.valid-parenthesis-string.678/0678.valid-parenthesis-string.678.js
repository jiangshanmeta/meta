/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            // 匹配右括号，优先使用左括号
            let hasStar = false;
            let hasLeft = false;
            for (let j = arr.length - 1; j > -1; j--) {
                if (arr[j] === '*') {
                    hasStar = true;
                    continue;
                }
                if (arr[j] === '(') {
                    arr.splice(j, 1);
                    hasLeft = true;
                    break;
                }
            }
            if (!hasLeft) {
                if (hasStar) {
                    arr.pop();
                } else {
                    return false;
                }
            }
        } else {
            arr.push(s[i]);
        }
    }

    // 只可能有左括号和*了
    const stack = [];
    while (arr.length) {
        const node = arr.shift();
        if (node === '(') {
            stack.push(node);
        } else if (stack.length) {
            stack.pop();
        }
    }
    return stack.length === 0;
};
