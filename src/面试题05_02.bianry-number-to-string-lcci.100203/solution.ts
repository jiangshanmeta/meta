function printBin (num: number): string {
    const result:string[] = ['0.', ];
    let rest = 30;
    while (num) {
        num *= 2;
        if (rest === 0) {
            return 'ERROR';
        }
        rest--;
        if (num >= 1) {
            result.push('1');
            num -= 1;
        } else {
            result.push('0');
        }
    }
    return result.join('');
}
