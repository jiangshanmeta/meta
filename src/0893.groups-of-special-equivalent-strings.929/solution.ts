function numSpecialEquivGroups (A: string[]): number {
    const set = new Set<string>();
    for (let i = 0; i < A.length; i++) {
        set.add(normalize(A[i]));
    }
    return set.size;
}

function normalize (str:string):string {
    const counts:number[] = new Array(52).fill(0);
    for (let i = 0; i < str.length; i++) {
        counts[str.charCodeAt(i) - 97 + (i & 1) * 26]++;
    }
    return counts.join(',');
}
