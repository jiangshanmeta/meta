function minimumPushes (word: string): number {
    let res = 0;
    let count = 1;
    let l = word.length;
    while (l > 0) {
        res += count * Math.min(8, l);
        l -= 8;
        count++;
    }
    return res;
}
