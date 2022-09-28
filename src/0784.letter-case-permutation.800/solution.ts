function letterCasePermutation (S: string): string[] {
    const result:string[] = [];
    backTracking(S, [] as string[], result);
    return result;
}

function backTracking (S:string, sequence:string[], result:string[]) {
    if (sequence.length === S.length) {
        result.push(sequence.join(''));
        return;
    }
    const code = S.charCodeAt(sequence.length);
    if (code > 47 && code < 58) {
        sequence.push(S[sequence.length]);
        backTracking(S, sequence, result);
        sequence.pop();
    } else {
        sequence.push(S[sequence.length].toLowerCase());
        backTracking(S, sequence, result);
        sequence.pop();

        sequence.push(S[sequence.length].toUpperCase());
        backTracking(S, sequence, result);
        sequence.pop();
    }
}
