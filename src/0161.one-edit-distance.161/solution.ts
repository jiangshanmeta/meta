function isOneEditDistance (s: string, t: string): boolean {
    if (Math.abs(s.length - t.length) > 1) {
        return false;
    }
    if (s.length === t.length) {
        let diffFlag = false;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === t[i]) {
                continue;
            }
            if (diffFlag) {
                return false;
            }
            diffFlag = true;
        }
        return diffFlag;
    }
    if (s.length < t.length) {
        const tmp = s;
        s = t;
        t = tmp;
    }
    let index1 = 0;
    let index2 = 0;
    while (index1 < s.length && index2 < t.length) {
        if (s[index1] === t[index2]) {
            index1++;
            index2++;
            continue;
        }
        if (index1 === index2) {
            index1++;
            continue;
        }

        return false;
    }

    return true;
}
