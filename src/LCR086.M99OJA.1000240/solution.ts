function partition (s: string): string[][] {
    const results:string[][] = [];
    const is = (l:number, r:number) => {
        while (l < r) {
            if (s[l++] !== s[r--]) {
                return false;
            }
        }
        return true;
    };
    const backTracking = (start:number, seq:string[]) => {
        if (start === s.length) {
            results.push([...seq, ]);
            return;
        }
        for (let end = start; end < s.length; end++) {
            if (is(start, end)) {
                seq.push(s.slice(start, end + 1));
                backTracking(end + 1, seq);
                seq.pop();
            }
        }
    };
    backTracking(0, []);
    return results;
}
