/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = [];
    const codeStack = [];
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (stack.length === 0) {
            stack.push(s[i]);
            codeStack.push(code);
            continue;
        }
        const lastCode = codeStack[codeStack.length - 1];
        if (Math.abs(code - lastCode) === 32) {
            stack.pop();
            codeStack.pop();
        } else {
            stack.push(s[i]);
            codeStack.push(code);
        }
    }
    return stack.join('');
};
