function permutation (s: string): string[] {
    const sList:string[] = s.split('').sort();
    const result:string[] = [];
    const sequence:string[] = [];
    const used:boolean[] = new Array(s.length).fill(false);
    backTracking(sList, used, sequence, result);
    return result;
}

function backTracking (s:string[], used:boolean[], sequence:string[], result:string[]) {
    if (sequence.length === s.length) {
        result.push(sequence.join(''));
        return;
    }
    for (let i = 0; i < used.length; i++) {
        if (used[i] || (i > 0 && s[i - 1] === s[i] && !used[i - 1])) {
            continue;
        }
        used[i] = true;
        sequence.push(s[i]);
        backTracking(s, used, sequence, result);
        sequence.pop();
        used[i] = false;
    }
}
