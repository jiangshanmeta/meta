function buildArray (target: number[], n: number): string[] {
    let i = 0;
    let j = 1;
    const result:string[] = [];
    while (i < target.length && j <= n) {
        if (target[i] === j) {
            result.push('Push');
            i++;
            j++;
        } else {
            result.push('Push', 'Pop');
            j++;
        }
    }
    return result;
}
