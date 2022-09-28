function anagramMappings (A: number[], B: number[]): number[] {
    const map = new Map<number, number[]>();
    for (let i = 0; i < B.length; i++) {
        if (!map.has(B[i])) {
            map.set(B[i], []);
        }
        map.get(B[i]).push(i);
    }
    const result:number[] = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
        result[i] = map.get(A[i]).pop();
    }
    return result;
}
