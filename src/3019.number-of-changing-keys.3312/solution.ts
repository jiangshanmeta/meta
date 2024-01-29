function countKeyChanges (s: string): number {
    s = s.toLowerCase();
    let res = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            res++;
        }
    }
    return res;
}
