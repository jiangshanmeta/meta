/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    let index = 0;
    function parse () {
        const map = {};
        while (index < formula.length) {
            // 开始括号了
            if (formula[index] === '(') {
                index++;
                const sub = parse();
                Object.keys(sub).forEach((element) => {
                    map[element] = (map[element] || 0) + sub[element];
                });
            } else if (formula[index] === ')') {
                // 括号结束 计算有几个括号单元 更新数量
                index++;
                let count = 1;
                if (index < formula.length && formula.charCodeAt(index) > 47 && formula.charCodeAt(index) < 58) {
                    const start = index;
                    index++;
                    while (index < formula.length && formula.charCodeAt(index) > 47 && formula.charCodeAt(index) < 58) {
                        index++;
                    }
                    count = +formula.substring(start, index);
                }

                if (count > 1) {
                    Object.keys(map).forEach((element) => {
                        map[element] *= count;
                    });
                }
                return map;
            } else {
                // 找元素
                const start = index;
                index++;
                while (index < formula.length) {
                    const code = formula.charCodeAt(index);
                    if (code < 97 || code > 122) {
                        break;
                    }
                    index++;
                }
                const element = formula.substring(start, index);
                // 找数量
                let count = 1;
                while (index < formula.length && formula.charCodeAt(index) > 47 && formula.charCodeAt(index) < 58) {
                    const start = index;
                    while (index < formula.length && formula.charCodeAt(index) > 47 && formula.charCodeAt(index) < 58) {
                        index++;
                    }
                    count = +formula.substring(start, index);
                }
                map[element] = (map[element] || 0) + count;
            }
        }
        return map;
    }

    const map = parse();
    // 字典序排序 转换为结果
    const elements = Object.keys(map).sort();

    const result = [];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        result.push(element);
        map[element] > 1 && result.push(map[element]);
    }
    return result.join('');
};
