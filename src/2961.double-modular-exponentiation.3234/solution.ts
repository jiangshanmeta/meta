function getGoodIndices (variables: number[][], target: number): number[] {
    const result:number[] = [];
    for (let i = 0; i < variables.length; i++) {
        let [a, b, c, m, ] = variables[i];
        a %= 10;
        let d = a;
        for (let j = 2; j <= b; j++) {
            d = (d * a) % 10;
        }
        d %= m;
        let e = d;
        for (let j = 2; j <= c; j++) {
            e = (e * d) % m;
        }

        if (e === target) {
            result.push(i);
        }
    }
    return result;
}
