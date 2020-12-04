/**
 * @param {string} expression
 * @return {boolean}
 */
// 类似于1096
var parseBoolExpr = function (expression) {
    let index = 0;
    function parse () {
        const result = [];
        while (index < expression.length) {
            // 左括号意味着新子单元的开始
            if (expression[index] === '(') {
                index++;
                result.push(parse()[0]);
            } else if (expression[index] === ')') {
                // 右括号意味着一个单元的结束
                index++;
                return result;
            } else if (expression[index] === '&') {
                index++;
                return [
                    parse().every(item => item), ];
            } else if (expression[index] === '|') {
                index++;
                return [
                    parse().some(item => item), ];
            } else if (expression[index] === '!') {
                index++;
                return [
                    !parse()[0], ];
            } else if (expression[index] === 't') {
                index++;
                return [
                    true, ];
            } else if (expression[index] === 'f') {
                index++;
                return [
                    false, ];
            } else if (expression[index] === ',') {
                // 逗号也意味着新子单元的开始
                index++;
                result.push(parse()[0]);
            }
        }
        return result;
    }
    return parse()[0];
};
