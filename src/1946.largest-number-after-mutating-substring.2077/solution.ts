function maximumNumber (num: string, change: number[]): string {
    // 找最开始的一组可以转换的连续子序列
    let index = 0;
    while (index < num.length) {
        if ((+num[index]) < change[num[index]]) {
            break;
        } else {
            index++;
        }
    }
    const startIndex = index;

    const changes:number[] = [];
    while (index < num.length) {
        if ((+num[index]) <= change[num[index]]) {
            changes.push(change[num[index++]]);
        } else {
            break;
        }
    }
    return `${num.slice(0, startIndex)}${changes.join('')}${num.slice(index)}`;
}
