function makeTheIntegerZero (num1: number, num2: number): number {
    if (num2 === 0) {
        return count1(num1);
    }
    if (num2 > 0) {
        let d = num1 - num2;
        let c = 1;
        while (d > 0) {
            if (c >= count1(d) && c <= d) {
                return c;
            }
            c++;
            d -= num2;
        }
        return -1;
    } else {
        let d = num1 - num2;
        let c = 1;
        while (c < count1(d) || c > d) {
            c++;
            d -= num2;
        }
        return c;
    }
}

function count1 (m:number) {
    const s = m.toString(2);
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            r++;
        }
    }
    return r;
}
