function decodeAtIndex (s: string, k: number): string {
    let size = 0n;
    const nums = new Set('23456789');
    for (let i = 0; i < s.length; i++) {
        if (nums.has(s[i])) {
            size *= BigInt(+s[i]);
        } else {
            size++;
        }
    }
    let kk = BigInt(k);

    for (let i = s.length - 1; i > -1; i--) {
        kk %= size;
        if (kk === 0n && !nums.has(s[i])) {
            return s[i];
        }
        if (nums.has(s[i])) {
            size /= BigInt(+s[i]);
        } else {
            size--;
        }
    }
    return '';
}
