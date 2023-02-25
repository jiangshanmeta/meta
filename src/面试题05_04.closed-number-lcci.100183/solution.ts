function findClosedNumbers (num: number): number[] {
    const str = num.toString(2);

    return [
        findLarger(str.split('')),
        findSmaller(str.split('')),
    ];
}

function findSmaller (str:string[]):number {
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] === '0' && str[i - 1] === '1') {
            str[i - 1] = '0';
            str[i] = '1';
            let k = i + 1;
            let count = 0;
            while (k < str.length) {
                if (str[k] === '1') {
                    count++;
                }
                str[k++] = '0';
            }
            k = i + 1;
            while (count > 0) {
                str[k++] = '1';
                count--;
            }

            return parseInt(str.join(''), 2);
        }
    }
    return -1;
}

function findLarger (str:string[]) {
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] === '1' && str[i - 1] === '0') {
            str[i] = '0';
            str[i - 1] = '1';
            let k = i + 1;
            let count = 0;
            while (k < str.length) {
                if (str[k] === '0') {
                    count++;
                }
                str[k++] = '1';
            }
            k = i + 1;
            while (count > 0) {
                str[k++] = '0';
                count--;
            }

            return parseInt(str.join(''), 2);
        }
    }
    if (str.length === 31) {
        return -1;
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++;
        }
    }
    return parseInt(`1${'0'.repeat(count + 1)}${'1'.repeat(str.length - 1 - count)}`, 2);
}
