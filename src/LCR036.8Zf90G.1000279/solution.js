/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const l1 = stack.pop();
            const l2 = stack.pop();
            stack.push(l1 + l2);
        } else if (tokens[i] === '-') {
            const l1 = stack.pop();
            const l2 = stack.pop();
            stack.push(l2 - l1);
        } else if (tokens[i] === '*') {
            const l1 = stack.pop();
            const l2 = stack.pop();
            stack.push(l1 * l2);
        } else if (tokens[i] === '/') {
            const l1 = stack.pop();
            const l2 = stack.pop();
            stack.push((l2 / l1) | 0);
        } else {
            stack.push(+tokens[i]);
        }
    }
    return stack.pop();
};
