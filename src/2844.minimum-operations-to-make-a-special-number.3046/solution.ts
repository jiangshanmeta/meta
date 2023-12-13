function minimumOperations (num: string): number {
    const find = (a:string, b:string) => {
        const indexB = num.lastIndexOf(b);
        if (indexB === -1) {
            return num.length;
        }
        const indexA = num.lastIndexOf(a, indexB - 1);
        if (indexA === -1) {
            return num.length;
        }
        return num.length - indexA - 2;
    };
    const res = Math.min(
        find('2', '5'),
        find('5', '0'),
        find('7', '5'),
        find('0', '0')
    );
    if (res === num.length && num.includes('0')) {
        return res - 1;
    }
    return res;
}
