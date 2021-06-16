function getKthMagicNumber (k: number): number {
    const seq = [1, ];
    let index3 = 0;
    let index5 = 0;
    let index7 = 0;
    while (seq.length < k) {
        const node = Math.min(seq[index3] * 3, seq[index5] * 5, seq[index7] * 7);
        seq.push(node);
        while (seq[index3] * 3 <= node) {
            index3++;
        }
        while (seq[index5] * 5 <= node) {
            index5++;
        }
        while (seq[index7] * 7 <= node) {
            index7++;
        }
    }
    return seq[k - 1];
}
