function findContinuousSequence (target: number): number[][] {
    const result:number[][] = [];
    let left = 1;
    let right = 0;
    let sum = 0;
    while (left < target) {
        while (right + 1 < target && sum < target) {
            right++;
            sum += right;
        }
        while (left < target && sum > target) {
            sum -= left;
            left++;
        }
        if (sum === target && left !== right) {
            const seq:number[] = [];
            for (let i = left; i <= right; i++) {
                seq.push(i);
            }
            result.push(seq);
        }

        if (left <= right) {
            sum -= left;
            left++;
        }
    }

    return result;
}
