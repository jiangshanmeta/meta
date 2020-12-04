/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var rules = [];
    var regIndex = 0;
    var regLen = p.length;
    var regItem;
    var regNext;
    // 解析匹配规则
    while (regIndex < regLen) {
        regItem = p[regIndex];
        regIndex++;
        regNext = p[regIndex];
        if (regItem === '.') {
            if (regNext === '*') {
                regIndex++;
                rules.push({
                    value: regItem,
                    type: 4,
                });
            } else {
                rules.push({
                    value: regItem,
                    type: 3,
                });
            }
        } else {
            if (regNext === '*') {
                // N个特定字符匹配
                regIndex++;
                rules.push({
                    value: regItem,
                    type: 2,
                });
            } else {
                // 最简单的单个特定字符匹配
                rules.push({
                    value: regItem,
                    type: 1,
                });
            }
        }
    }

    var stack = [];
    var strIndex = 0;
    var strLen = s.length;

    var stackTop;
    var direction = 1;
    var flag;
    var count;

    while (stack.length || rules.length) {
        if (!stack.length) {
            stack.push(rules.shift());
        }
        stackTop = stack[stack.length - 1];

        if (direction) {
            switch (stackTop.type) {
            case 1:
            case 3:
                // 因为需要匹配一个字符，字符索引越界说明匹配失败
                if (strIndex >= strLen) {
                    direction = 0;
                    continue;
                }
                flag = false;
                if ((stackTop.type === 1) && (s[strIndex] !== stackTop.value)) {
                    flag = true;
                }

                if (flag) {
                    // 匹配失败
                    if (stack.length > 1) {
                        rules.unshift(stack.pop());
                        direction = 0;
                        // strIndex--;
                    } else {
                        return false;
                    }
                } else {
                    // 单字符匹配成功
                    strIndex++;
                    if (stack.length === 1) {
                        stack.pop();
                    } else {
                        if (rules.length) {
                            stack.push(rules.shift());
                        } else {
                            // 恰好匹配完
                            if (strIndex === strLen) {
                                return true;
                            } else {
                                direction = 0;
                            }
                        }
                    }
                }
                break;
            case 2:
            case 4:

                count = 0;
                stackTop.startIndex = strIndex;
                while (strIndex < strLen) {
                    flag = false;
                    if ((stackTop.type === 2) && (s[strIndex] !== stackTop.value)) {
                        flag = true;
                    }

                    if (flag) {
                        break;
                    }

                    strIndex++;
                    count++;
                }
                stackTop.count = count;
                if (rules.length) {
                    stack.push(rules.shift());
                } else {
                    // 最后一条规则是x*
                    if (strIndex === strLen) {
                        return true;
                    } else {
                        direction = 0;
                    }
                }
                break;
            }
        } else {
            switch (stackTop.type) {
            case 1:
            case 3:
                // 例如字符串为aaa  匹配规则为aaaa
                if (stack.length === 1) {
                    return false;
                }
                rules.unshift(stack.pop());
                break;
            case 2:
            case 4:
                if (stackTop.count > 0) {
                    stackTop.count--;
                    strIndex = stackTop.startIndex + stackTop.count;
                    if (rules.length) {
                        stack.push(rules.shift());
                        direction = 1;
                    }
                } else {
                    if (stack.length > 1) {
                        rules.unshift(stack.pop());
                    } else {
                        return false;
                    }
                }
                break;
            }
        }
    }

    if (strIndex < strLen) {
        return false;
    }

    return true;
};
