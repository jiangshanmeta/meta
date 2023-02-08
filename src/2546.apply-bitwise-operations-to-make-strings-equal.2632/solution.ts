/*
 * 按照转换规则 只要有一个1，其余的1可以转换为0 其余的0也可以转换为1
 * 只有0的情况下不能转换
*/

function makeStringsEqual (s: string, target: string): boolean {
    return s.includes('1') === target.includes('1');
}
