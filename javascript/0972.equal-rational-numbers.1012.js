/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// 看不动标准答案
// 我的思路是把两个字符串normalize

// 辅助函数，把repeat部分转化为不重复的   (999)->(9)
function uniqueRepeatingPart (string) {
    let index = string.indexOf(string[0], 1);
    while (index > -1) {
        if (string.length % index !== 0) {
            index = string.indexOf(string[0], index + 1);
            continue;
        }

        const sub = string.slice(0, index);
        if (sub.repeat(string.length / index) === string) {
            return sub;
        }
        index = string.indexOf(string[0], index + 1);
    }
    return string;
}

// 把字符串转化为标准格式
function parse (string) {
    // 首先根据.和括号大体分割一下
    const dotIndex = string.indexOf('.');
    let IntegerPart;
    if (dotIndex === -1) {
        IntegerPart = string;
    } else {
        IntegerPart = string.slice(0, dotIndex);
    }

    const bracketIndex = string.indexOf('(');
    let NonRepeatingPart = '';
    let RepeatingPart = '';
    if (bracketIndex > -1) {
        NonRepeatingPart = string.slice(dotIndex + 1, bracketIndex);
        RepeatingPart = string.slice(bracketIndex + 1, -1);
    } else if (dotIndex > -1) {
        NonRepeatingPart = string.slice(dotIndex + 1);
    }

    if (RepeatingPart.length) {
        RepeatingPart = uniqueRepeatingPart(RepeatingPart);
        // 重复单元是0=>没有重复单元
        if (RepeatingPart === '0') {
            RepeatingPart = '';
        } else {
            // NonRepeatingPart 以重复单元结尾 去掉重复单元
            // 尽可能减少NonRepeatingPart
            while (NonRepeatingPart.endsWith(RepeatingPart)) {
                NonRepeatingPart = NonRepeatingPart.slice(0, -RepeatingPart.length);
            }
        }
    }

    while (RepeatingPart.length && NonRepeatingPart.length) {
        const lastChar = NonRepeatingPart[NonRepeatingPart.length - 1];
        // 0.5(25)  0.(52)
        // 尽可能减少NonRepeatingPart
        if (lastChar === RepeatingPart[RepeatingPart.length - 1]) {
            RepeatingPart = lastChar + RepeatingPart.slice(0, -1);
            NonRepeatingPart = NonRepeatingPart.slice(0, -1);
        } else {
            break;
        }
    }

    // 处理循环是9的情况
    if (RepeatingPart === '9') {
        RepeatingPart = '';
        if (NonRepeatingPart.length) {
            NonRepeatingPart = (((+NonRepeatingPart) + 1) + '').padStart(NonRepeatingPart.length, '0');
        } else {
            IntegerPart = ((+IntegerPart) + 1) + '';
        }
    }

    // corner case 不重复小数为0，重复部分为空字符串
    if (NonRepeatingPart === '0' && RepeatingPart === '') {
        NonRepeatingPart = '';
    }

    return [
        IntegerPart,
        NonRepeatingPart,
        RepeatingPart,
    ];
}

var isRationalEqual = function (S, T) {
    const parseS = parse(S);
    const parseT = parse(T);
    // console.log(parseS,parseT)
    return parseS[0] === parseT[0] && parseS[1] === parseT[1] && parseS[2] === parseT[2];
};
