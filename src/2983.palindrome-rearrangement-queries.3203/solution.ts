function canMakePalindromeQueries (s: string, queries: number[][]): boolean[] {
    const H = s.length >> 1;
    let l1 = 0;
    let r2 = s.length - 1;
    while (l1 < H && s[l1] === s[r2]) {
        l1++;
        r2--;
    }
    if (l1 === H) {
        return new Array<boolean>(queries.length).fill(true);
    }
    let l2 = H - 1;
    let r1 = H;
    while (l2 > -1 && s[l2] === s[r1]) {
        l2--;
        r1++;
    }
    const counts = new Array<number>(26).fill(0);
    for (let i = l1; i <= l2; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    for (let i = r1; i <= r2; i++) {
        counts[s.charCodeAt(i) - 97]--;
    }
    const allzero = counts.every(item => item === 0);
    if (!allzero) {
        return new Array<boolean>(queries.length).fill(false);
    }

    return queries.map(([a, b, c, d, ]) => {
        if ((a <= l1 && b >= l2) || (c <= r1 && d >= r2)) {
            return true;
        }
        if (b < l1 || a > l2 || c > r2 || d < r1) {
            return false;
        }
        if (a > l1 && b < l2) {
            return false;
        }
        if (c > r1 && d < r2) {
            return false;
        }
        a = Math.max(a, l1);
        b = Math.min(b, l2);
        c = Math.max(c, r1);
        d = Math.min(d, r2);

        if (b < l2) {
            if (c > r1) {
                return false;
            }

            const counts = new Array<number>(26).fill(0);

            for (let i = b + 1; i <= l2; i++) {
                counts[s.charCodeAt(i) - 97]++;
            }
            let uncoverCount = counts.reduce((acc, item) => acc + (item > 0 ? 1 : 0), 0);
            for (let i = r1; i <= d; i++) {
                if (uncoverCount === 0) {
                    break;
                }
                const offset = s.charCodeAt(i) - 97;
                if (counts[offset] === 1) {
                    uncoverCount--;
                }
                counts[offset]--;
            }

            return uncoverCount === 0;
        } else {
            if (d < r2) {
                return false;
            }

            const counts = new Array<number>(26).fill(0);
            for (let i = l1; i < a; i++) {
                counts[s.charCodeAt(i) - 97]++;
            }
            let uncoverCount = counts.reduce((acc, item) => acc + (item > 0 ? 1 : 0), 0);

            for (let i = r2; i >= c; i--) {
                if (uncoverCount === 0) {
                    break;
                }

                const offset = s.charCodeAt(i) - 97;
                if (counts[offset] === 1) {
                    uncoverCount--;
                }
                counts[offset]--;
            }

            return uncoverCount === 0;
        }
    });
}
