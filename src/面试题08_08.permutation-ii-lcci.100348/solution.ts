function permutation (S: string): string[] {
    const sList = S.split('').sort();
    const used:boolean[] = new Array(sList.length).fill(false);
    const result:string[] = [];
    backTracking(sList, used, [] as string[], result);
    return result;
}

function backTracking (sList:string[], used:boolean[], sequence:string[], result:string[]) {
    if (sequence.length === sList.length) {
        result.push(sequence.join(''));
        return;
    }
    for (let i = 0; i < sList.length; i++) {
        if (used[i] || (i > 0 && sList[i - 1] === sList[i] && !used[i - 1])) {
            continue;
        }
        used[i] = true;
        sequence.push(sList[i]);
        backTracking(sList, used, sequence, result);
        sequence.pop();
        used[i] = false;
    }
}
