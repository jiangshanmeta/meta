function maxStrength (nums: number[]): number {
    let res = 1;
    let hasPositive = false;
    let hasZero = false;
    const negatives:number[] = [];
    for (const num of nums) {
        if (num > 0) {
            hasPositive = true;
            res *= num;
        } else if (num === 0) {
            hasZero = true;
        } else {
            negatives.push(num);
        }
    }

    if (negatives.length === 1) {
        if (hasPositive) {
            return res;
        }
        if (hasZero) {
            return 0;
        }
        return negatives[0];
    }
    negatives.sort((a, b) => a - b);
    if (negatives.length & 1) {
        negatives.pop();
    }

    for (const n of negatives) {
        res *= n;
    }

    return hasPositive || negatives.length > 0 ? res : 0;
}
