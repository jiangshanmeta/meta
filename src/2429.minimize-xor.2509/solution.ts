// TODO 全位运算
// 先满足num1的高位1 然后剩余的1尽可能低位 这样最小
function minimizeXor (num1: number, num2: number): number {
    let num = count1(num2);
    const num1Str = num1.toString(2);
    const result = new Array<string>(num1Str.length).fill('0');
    let index = 0;
    while (index < result.length && num > 0) {
        if (num1Str[index] === '1') {
            result[index] = '1';
            num--;
        }
        index++;
    }
    index = result.length - 1;
    while (index > -1 && num > 0) {
        if (result[index] === '0') {
            result[index] = '1';
            num--;
        }
        index--;
    }

    return Number.parseInt(`${'1'.repeat(num)}${result.join('')}`, 2);
}

function count1 (num:number):number {
    let result = 0;
    num >>>= 0;
    while (num > 0) {
        num = (num & (num - 1)) >>> 0;
        result++;
    }
    return result;
}
