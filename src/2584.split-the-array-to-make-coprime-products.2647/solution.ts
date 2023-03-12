function findValidSplit (nums: number[]): number {
    const MAX = Math.max(...nums);
    const isPrimes = new Array<boolean>(MAX + 1).fill(true);
    const factor2 = new Array<number>(MAX + 1).fill(0);
    for (let i = 2; i < isPrimes.length; i++) {
        if (!isPrimes[i]) {
            continue;
        }

        for (let j = 2 * i; j < isPrimes.length; j += i) {
            isPrimes[j] = false;
            factor2[j] = i;
        }
    }
    const factorsSets = nums.map((num) => {
        const set = new Set<number>();
        while (num !== 1) {
            if (isPrimes[num]) {
                set.add(num);
                break;
            }
            const f = factor2[num];
            set.add(f);
            num /= f;
        }
        return set;
    });

    const facotrsCountMap = new Map<number, number>();
    for (const set of factorsSets) {
        for (const item of set) {
            if (facotrsCountMap.has(item)) {
                facotrsCountMap.set(item, facotrsCountMap.get(item)! + 1);
            } else {
                facotrsCountMap.set(item, 1);
            }
        }
    }
    const set = new Set<number>();
    for (let i = 0; i < nums.length - 1; i++) {
        const factors = factorsSets[i];
        for (const f of factors) {
            set.add(f);
            facotrsCountMap.set(f, facotrsCountMap.get(f)! - 1);
        }
        let match = true;
        for (const f of set) {
            if (facotrsCountMap.get(f)! > 0) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }

    return -1;
}
