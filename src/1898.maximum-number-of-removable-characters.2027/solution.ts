function maximumRemovals (s: string, p: string, removable: number[]): number {
    const sarr = s.split('');
    let l = 0;
    let h = removable.length - 1;
    let r = 0;
    while (l <= h) {
        const m = (l + h) >> 1;
        const set = new Set(removable.slice(0, m + 1));
        const arr = sarr.filter((item, index) => !set.has(index));

        if (is(arr, p)) {
            r = Math.max(r, m + 1);
            l = m + 1;
        } else {
            h = m - 1;
        }
    }
    return r;
}

function is (arr:string[], s:string) {
    let i = 0;
    let j = 0;
    while (i < arr.length && j < s.length) {
        if (arr[i] === s[j]) {
            i++;
            j++;
        } else {
            i++;
        }
    }
    return j === s.length;
}
