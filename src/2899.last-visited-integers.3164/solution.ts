function lastVisitedIntegers (words: string[]): number[] {
    const seq:number[] = [];
    const result:number[] = [];
    let count = 0;
    for (const str of words) {
        if (str === 'prev') {
            count++;
            if (count > seq.length) {
                result.push(-1);
            } else {
                result.push(seq[seq.length - count]);
            }
        } else {
            seq.push(+str);
            count = 0;
        }
    }
    return result;
}
