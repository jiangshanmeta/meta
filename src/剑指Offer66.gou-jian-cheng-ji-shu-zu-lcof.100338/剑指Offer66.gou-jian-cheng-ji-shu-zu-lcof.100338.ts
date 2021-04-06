function constructArr (a: number[]): number[] {
    const befores:number[] = new Array(a.length);
    let before = 1;
    for (let i = 0; i < a.length; i++) {
        befores[i] = before;
        before *= a[i];
    }
    const afters:number[] = new Array(a.length);
    let after = 1;
    for (let i = a.length - 1; i > -1; i--) {
        afters[i] = after;
        after *= a[i];
    }
    const result:number[] = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = befores[i] * afters[i];
    }
    return result;
}
