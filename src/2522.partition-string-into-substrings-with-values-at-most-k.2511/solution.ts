function minimumPartition (s: string, k: number): number {
    const L = k.toString().length;
    let index = 0;
    let result = 0;

    while (index < s.length) {
        let l = L;
        while (l > 0) {
            const tryNum = +s.slice(index, index + l);
            if (tryNum > k) {
                l--;
            } else {
                result++;
                index += l;
                break;
            }
            if (l === 0) {
                return -1;
            }
        }
    }
    return result;
}
