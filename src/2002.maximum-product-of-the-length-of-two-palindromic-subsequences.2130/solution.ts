function maxProduct (s: string): number {
    let result = 0;
    const is = (seq:string[]) => {
        let l = 0;
        let r = seq.length - 1;
        while (l < r) {
            if (seq[l++] !== seq[r--]) {
                return false;
            }
        }
        return true;
    };
    const backTracking = (index:number, s1:string[], s2:string[]) => {
        if (index === s.length) {
            if (is(s1) && is(s2)) {
                result = Math.max(result, s1.length * s2.length);
            }

            return;
        }

        s1.push(s[index]);
        backTracking(index + 1, s1, s2);
        s1.pop();

        s2.push(s[index]);
        backTracking(index + 1, s1, s2);
        s2.pop();

        backTracking(index + 1, s1, s2);
    };
    backTracking(0, [], []);
    return result;
}
