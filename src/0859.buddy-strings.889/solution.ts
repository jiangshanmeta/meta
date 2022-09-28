function buddyStrings (A: string, B: string): boolean {
    if (A.length !== B.length || A.length < 2) {
        return false;
    }
    const counts:number[] = new Array(26).fill(0);
    let index1 = -1;
    let changed = false;
    for (let i = 0; i < A.length; i++) {
        const code = A.charCodeAt(i) - 97;
        counts[code]++;
        if (A[i] === B[i]) {
            continue;
        }
        if (index1 === -1) {
            index1 = i;
        } else if (changed) {
            return false;
        } else {
            if (A[index1] === B[i] && A[i] === B[index1]) {
                changed = true;
            } else {
                return false;
            }
        }
    }

    if (index1 === -1) {
        return counts.some(item => item > 1);
    }
    return changed;
}
