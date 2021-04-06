function validMountainArray (A: number[]): boolean {
    if (A.length < 3) {
        return false;
    }
    let hasDecreasing = false;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            continue;
        }
        if (A[i] === A[i - 1]) {
            return false;
        }
        if (i === 1) {
            return false;
        }
        hasDecreasing = true;
        for (let j = i + 1; j < A.length; j++) {
            if (A[j] >= A[j - 1]) {
                return false;
            }
        }
        break;
    }
    return hasDecreasing;
}
