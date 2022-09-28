function licenseKeyFormatting (S: string, K: number): string {
    const seq:string[] = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '-') {
            continue;
        }
        seq.push(S[i]);
    }
    const result:string[] = [];
    const mod = seq.length % K;
    if (mod) {
        result.push(seq.slice(0, mod).join(''));
    }
    let index = mod;
    while (index < seq.length) {
        result.push(seq.slice(index, index + K).join(''));
        index += K;
    }

    return result.join('-').toUpperCase();
}
