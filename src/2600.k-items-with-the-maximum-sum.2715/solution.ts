function kItemsWithMaximumSum (numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
    const a = Math.min(numOnes, k);
    let result = a;
    k -= a;
    k -= numZeros;
    if (k > 0) {
        result -= k;
    }
    return result;
}
