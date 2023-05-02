function powerfulIntegers (x: number, y: number, bound: number): number[] {
    if (x === 1) {
        if (y === 1) {
            if (bound < 2) {
                return [];
            }
            return [2, ];
        }
        const yOptions = getOption(y, bound);
        return yOptions.map((item) => item + 1);
    }
    if (y === 1) {
        const xOptions = getOption(x, bound);
        return xOptions.map(item => item + 1);
    }
    const xOptions = getOption(x, bound);
    const yOptions = getOption(y, bound);
    const set = new Set<number>();
    for (const xo of xOptions) {
        for (const yo of yOptions) {
            const sum = xo + yo;
            if (sum > bound) {
                break;
            }
            set.add(sum);
        }
    }

    return [...set, ];
}

function getOption (x:number, bound:number) {
    const result:number[] = [];
    let base = 1;
    while (base < bound) {
        result.push(base);
        base *= x;
    }
    return result;
}
