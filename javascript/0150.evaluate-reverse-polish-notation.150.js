/**
 * @param {string[]} tokens
 * @return {number}
 */
// 后缀表达式求助
var evalRPN = function (tokens) {
    const stack = [];
    let second, first;
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
        case '+':
            second = stack.pop();
            first = stack.pop();
            stack.push(first + second);
            break;
        case '-':
            second = stack.pop();
            first = stack.pop();
            stack.push(first - second);
            break;
        case '*':
            second = stack.pop();
            first = stack.pop();
            stack.push(first * second);
            break;
        case '/':
            second = stack.pop();
            first = stack.pop();
            stack.push(first / second | 0);
            break;
        default :
            stack.push(+tokens[i]);
        }
    }
    return stack[0];
};
