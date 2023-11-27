function gcd (a:number, b:number) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

function calcPrimes (max:number) {
    const primes = new Array<boolean>(max + 1).fill(true);
    for (let i = 2; i < primes.length; i++) {
        if (!primes[i]) {
            continue;
        }
        let index = 2 * i;
        while (index < primes.length) {
            primes[index] = false;
            index += i;
        }
    }

    return primes;
}

function canTraverseAllPairs (nums: number[]): boolean {
    if (nums.length === 1) {
        return true;
    }
    nums = [...new Set(nums), ];
    const pIndexs = new Array<number>(nums.length);
    const max = Math.max(...nums);
    const allPrimes = calcPrimes(max);
    const primes:number[] = [];
    for (let i = 0; i < pIndexs.length; i++) {
        if (nums[i] === 1) {
            return false;
        }
        pIndexs[i] = i;
        if (allPrimes[nums[i]]) {
            primes.push(nums[i]);
        }
    }
    if (nums.length === 1) {
        return true;
    }
    if (primes.length > 0) {
        for (const p of primes) {
            if (!nums.some(num => num > p && num % p === 0)) {
                return false;
            }
        }
    }

    for (let i = 0; i < pIndexs.length; i++) {
        for (let j = i + 1; j < pIndexs.length; j++) {
            if (gcd(nums[i], nums[j]) === 1) {
                continue;
            }
            let pi = i;
            while (pi !== pIndexs[pi]) {
                pi = pIndexs[pi];
            }
            let pj = j;
            while (pj !== pIndexs[pj]) {
                pj = pIndexs[pj];
            }
            const cp = Math.min(pi, pj);
            pIndexs[pi] = cp;
            pIndexs[pj] = cp;
            pi = i;
            pj = j;
            while (pi !== cp) {
                const npi = pIndexs[pi];
                pIndexs[pi] = cp;
                pi = npi;
            }
            while (pj !== cp) {
                const npj = pIndexs[pj];
                pIndexs[j] = cp;
                pj = npj;
            }
        }
    }
    for (let i = 0; i < pIndexs.length; i++) {
        let pi = pIndexs[i];
        while (pi !== pIndexs[pi]) {
            pi = pIndexs[pi];
        }
        const cp = pi;
        pi = i;
        while (pi !== cp) {
            const npi = pIndexs[pi];
            pIndexs[pi] = cp;
            pi = npi;
        }
    }
    return pIndexs.every(item => item === 0);
}
