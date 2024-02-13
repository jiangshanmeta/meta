function largestComponentSize(nums: number[]): number {

    const set = new Set<number>();
    const numFactors = nums.map((num) => {
        const factors: number[] = [];
        for (let i = 2; i * i <= num; i++) {
            if (num % i !== 0) {
                continue
            }
            while (num % i === 0) {
                num /= i;
            }
            factors.push(i);
            set.add(i);
        }
        if (num > 1) {
            factors.push(num);
            set.add(num);
        }

        return factors
    })

    const allFactors = [...set].sort((a, b) => a - b);
    const parentIds = new Array<number>(allFactors[allFactors.length - 1] + 1);
    const counts = new Array<number>(parentIds.length).fill(0)
    for (let i = 2; i < parentIds.length; i++) {
        if (set.has(i)) {
            parentIds[i] = i;
        }
    }

    const connect = (a: number, b: number) => {
        let pa = a;
        let pb = b;
        while (parentIds[pa] !== pa) {
            pa = parentIds[pa];
        }
        while (parentIds[pb] !== pb) {
            pb = parentIds[pb];
        }
        const p = Math.min(pa, pb);
        while (parentIds[a] !== p) {
            pa = parentIds[a];
            parentIds[a] = p;
            a = pa;
        }
        while (parentIds[b] !== p) {
            pb = parentIds[b];
            parentIds[b] = p;
            b = pb;
        }

    }

    for (const factors of numFactors) {
        for (let i = 1; i < factors.length; i++) {
            connect(factors[0], factors[i])
        }

    }

    for (let factor of allFactors) {
        let fp = factor;
        while (parentIds[fp] !== fp) {
            fp = parentIds[fp];
        }
        while (parentIds[factor] !== fp) {
            const p = parentIds[factor];
            parentIds[factor] = fp;
            factor = p;
        }
    }
    for (const factors of numFactors) {
        const p = parentIds[factors[0]]
        counts[p]++;
    }


    let result = 0;
    for (const factor of allFactors) {
        result = Math.max(result, counts[factor])
    }

    return result
};
