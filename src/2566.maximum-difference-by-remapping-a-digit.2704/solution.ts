function minMaxDifference (num: number): number {
    return getMax(num) - getMin(num);
}

function getMax (num:number) {
    const list = num.toString().split('');
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== '9') {
            const n = list[i];
            while (i < list.length) {
                if (list[i] === n) {
                    list[i] = '9';
                }
                i++;
            }
        }
    }
    return +list.join('');
}

function getMin (num:number) {
    const list = num.toString().split('');
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== '0') {
            const n = list[i];
            while (i < list.length) {
                if (list[i] === n) {
                    list[i] = '0';
                }
                i++;
            }
        }
    }
    return +list.join('');
}
