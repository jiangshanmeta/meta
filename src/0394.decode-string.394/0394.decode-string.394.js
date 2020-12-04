/**
 * @param {string} s
 * @return {string}
 */

const numMap = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
};
var decodeString = function (s) {
    const stack = [];
    let index = 0;
    while (index < s.length) {
        if (numMap[s[index]]) {
            let num = +s[index];
            index++;
            while (s[index] !== '[') {
                num = num * 10 + (+s[index++]);
            }
            stack.push(num);
            stack.push('[');
        } else if (s[index] === ']') {
            let str = '';
            while (stack[stack.length - 1] !== '[') {
                str = `${stack.pop()}${str}`;
            }
            stack.pop();
            stack.push(str.repeat(stack.pop()));
        } else {
            stack.push(s[index]);
        }
        index++;
    }

    return stack.join('');
};
